import { Request, Response } from "express";
import Certificate from "../models/Certificates";
import fs from "fs";
import path from "path";
import { createCertificateWithImage } from "../middlewares/CertificateGenerate";
import User from "../models/User";

export const certificateAdding = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { course_id, certificate_url } = req.body;

    const certificate = await Certificate.create({
      user_id: Number(userId),
      course_id,
      certificate_url,
    });
    res
      .status(200)
      .json({ message: "certificate added successfully", certificate });
  } catch (error) {
    console.log(error);
  }
};

export const getcertificates = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { courseId } = req.body;
    const certificate = await Certificate.findAll({
      where: { user_id: userId, course_id: courseId },
    });
    res
      .status(200)
      .json({ message: "certificates found successfully", certificate });
  } catch (error) {
    console.log(error);
  }
};

export const certificateUpdate = async (req: Request, res: Response) => {
  try {
    const { certificateId } = req.params;
    const { course_id, issued_date, certificate_url, user_id } = req.body;

    const updatedCertificate = await Certificate.update(
      { certificate_url },
      { where: { id: certificateId, course_id, user_id, issued_date } }
    );
    res.status(200).json({
      message: "certificate updated successfully",
      updatedCertificate,
    });
  } catch (error) {
    console.log(error);
  }
};

export const certificateDelete = async (req: Request, res: Response) => {
  try {
    const { certificateId } = req.params;
    const deletedCertificate = await Certificate.destroy({
      where: { id: certificateId },
    });
    res.status(200).json({
      message: "certificate deleted successfully",
      deletedCertificate,
    });
  } catch (error) {
    console.log(error);
  }
};

export const CertificateFileRetrival = async (req: Request, res: Response) => {
  const { fileName } = req.params;
  const filePath = path.join(__dirname, "../../uploads/certificate", fileName);
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).json({ error: "file not found" });
    }
    res.sendFile(filePath);
  });
};

export const CertificateGeneration = async (req: Request, res: Response) => {
  try {
    function containsSpace(str: string) {
      const spaceRegex = /\s/;
      return spaceRegex.test(str);
    }
    let { username, userId } = req.body;
    if (containsSpace(username))
      throw new Error("username must not contain space");
    function removeSpaces(inputString: string) {
      return inputString.replace(/\s+/g, "");
    }

    createCertificateWithImage(username);
    username = removeSpaces(username);
    const userIssued = await User.findOne({ where: { id: userId } });
    if (userIssued) {
      const certificate = await Certificate.update(
        { certificate_url: `${username}_certificate.pdf` },
        { where: { id: userId } }
      );
      if (certificate) {
        res.status(201).json({
          message: "certificate created",
          certificateUrl: `${username}_certificate.pdf`,
        });
      } else {
        res.status(500).json({ message: "certificate not created" });
      }
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const certificateRetrival = async (req: Request, res: Response) => {
  const { certificateUrl } = req.params;
  const filePath = path.join(
    __dirname,
    "../../uploads/certificate",
    certificateUrl
  );
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).json({ error: "certificate not found" });
    }
    res.sendFile(filePath);
  });
};
