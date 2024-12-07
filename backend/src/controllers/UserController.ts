import { Request, Response } from "express";
import User from "../models/User";
import fs from "fs";
import path from "path";

export const profileUploadController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (user) {
      if (req.file) {
        user.profilePicture = req.file.path;
        user.save();
        res.json({ message: "user image uploaded successfully", user });
      } else {
        res.status(400).json({ message: "no image file uploaded" });
      }
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

export const AdminUserDelete = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { deleteUserId } = req.body;
    const user = await User.findOne({ where: { id: userId } });
    if (user?.role === "admin") {
      const deletedUsers = await User.destroy({ where: { id: deleteUserId } });
      res.json({ message: "user deleted successfully", deletedUsers });
    } else {
      res.status(403).json({ message: "you are not eligible to delete users" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

export const imageRetrival = async (req: Request, res: Response) => {
  const { ImageName } = req.params;
  const filePath = path.join(__dirname, "../../uploads", ImageName);
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).json({ error: "Image not found" });
    }
    res.sendFile(filePath);
  });
};

export const fillProfile = async (req: Request, res: Response) => {
  try {
    const { fullname, nickname, gender, phone_number, email, id } = req.body;
    const userUpdated = await User.update(
      { username: fullname, nickName: nickname, gender, phone_number, email },
      { where: { id } }
    );
    console.log(userUpdated);
    res.status(201).json({ user: userUpdated });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const AddPin = async (req: Request, res: Response) => {
  try {
    const { pin, id } = req.body;
    const userUpdated = await User.update({ pin }, { where: { id } });
    console.log(userUpdated);
    res.status(201).json({ user: userUpdated });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const GetUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    console.log(error);
  }
};
