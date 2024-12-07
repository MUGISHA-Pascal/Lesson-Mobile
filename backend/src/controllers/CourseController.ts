import { Request, Response } from "express";
import User from "../models/User";
import Course from "../models/Courses";
import fs from "fs";
import path from "path";

export const courseAdding = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { title, description, content_type, category, is_active } = req.body;
    const user = await User.findOne({ where: { id: userId } });
    if (user?.role === "admin") {
      const course = await Course.create({
        title,
        description,
        content_type,
        category,
        created_by: Number(userId),
        is_active,
      });
      res.status(200).json({ message: "course created successfully", course });
    } else {
      res.json({ message: "you are not allowed adding courses" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCourses = async (req: Request, res: Response) => {
  try {
    if (req.body.title) {
      const { title } = req.body;
      const courseFound = await Course.findAll({ where: { title } });
      if (!courseFound) {
        res.json({ message: "course not found" });
      }
      res.status(200).json({ message: "course found", courses: courseFound });
    } else {
      const courses = await Course.findAll();
      res.status(200).json({ message: "all courses", courses });
    }
  } catch (error) {
    console.log(error);
  }
};

export const courseUpdate = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const {
      courseId,
      title,
      description,
      content_type,
      created_by,
      is_active,
    } = req.body;
    const user = await User.findOne({ where: { id: userId } });
    if (user?.role === "admin") {
      const updatedCourse = await Course.update(
        { title, description, content_type, created_by, is_active },
        { where: { id: courseId } }
      );
      res
        .status(200)
        .json({ message: "course updated successfully", updatedCourse });
    } else {
      res.json({ message: "you are not allowed updating courses" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const courseDelete = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { courseId } = req.body;
    const user = await User.findOne({ where: { id: userId } });
    if (user?.role === "admin") {
      const deletedCourse = await Course.destroy({ where: { id: courseId } });
      res
        .status(200)
        .json({ message: "course deleted successfully", deletedCourse });
    } else {
      res.json({ message: "you are not allowed deleting courses" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const CourseFileAdding = async (req: Request, res: Response) => {
  try {
    const { userId, courseTitle, category, courseDescription, contentType } =
      req.body;
    const user = await User.findOne({ where: { id: userId } });
    if (user?.role === "admin") {
      if (!req.file) {
        res.status(400).json({ message: "No file uploaded" });
      }
      await Course.create({
        title: courseTitle,
        description: courseDescription,
        content_type: contentType,
        category,
        created_by: userId,
        file: req.file?.filename,
      });
      res.status(200).json({
        message: "course uploaded successfully",
        file: req.file,
      });
    } else {
      res.json({ message: "you are not allowed adding courses" });
    }
  } catch (error) {
    res.json({ message: error });
  }
};
export const fileRetrival = async (req: Request, res: Response) => {
  const { fileName } = req.params;
  const filePath = path.join(__dirname, "../../uploads/courses", fileName);
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).json({ error: "file not found" });
    }
    res.sendFile(filePath);
  });
};
export const GetCourseByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const courses = await Course.findAll({ where: { category } });
    res.status(201).json({ courses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export const courseprofileUploadController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const course = await Course.findOne({ where: { id } });
    if (course) {
      if (req.file) {
        course.profile_image = req.file.path;
        course.save();
        res.json({ message: "course image uploaded successfully", course });
      } else {
        res.status(400).json({ message: "no course file uploaded" });
      }
    } else {
      res.status(404).json({ message: "course not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
export const courseimageRetrival = async (req: Request, res: Response) => {
  const { ImageName } = req.params;
  const filePath = path.join(__dirname, "../../uploads", ImageName);
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).json({ error: "Image not found" });
    }
    res.sendFile(filePath);
  });
};
