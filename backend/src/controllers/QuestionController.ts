import { Request, Response } from "express";
import User from "../models/User";
import Question from "../models/Questions";
import Quiz from "../models/Quiz";
import multer from "multer";
import fs from "fs";
import path from "path";
/**
 * @swagger
 * tags:
 *   name: Questions
 *   description: Question management for quizzes
 */

/**
 * @swagger
 * /questions/add/{userId}:
 *   post:
 *     summary: Add a new question to a quiz (admin or sub_admin only)
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user adding the question
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quiz_id:
 *                 type: integer
 *                 example: 1
 *               question_text:
 *                 type: string
 *                 example: "What is the capital of France?"
 *               correct_answer:
 *                 type: string
 *                 example: "Paris"
 *     responses:
 *       200:
 *         description: Question added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "question added successfully"
 *                 question:
 *                   $ref: '#/components/schemas/Question'
 *       403:
 *         description: Not eligible to add question
 *       500:
 *         description: Server error
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "../uploads");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

export const questionAdding = async (req: Request, res: Response) => {
  try {
    const { questions } = req.body;
    const files = req.files as Express.Multer.File[]; // Cast `req.files` to the expected type

    if (!Array.isArray(questions) || questions.length === 0) {
      res.status(400).json({ message: "Invalid questions data" });
      return;
    }

    const createdQuestions: any[] = [];

    for (const questionData of questions) {
      const { question, options, correct_answer, quiz_id } = questionData;

      // Validate the quiz existence
      const quizExists = await Quiz.findOne({ where: { id: quiz_id } });
      if (!quizExists) {
        res
          .status(404)
          .json({ message: `Quiz with ID ${quiz_id} does not exist` });
        return;
      }

      // Map options: replace file options with saved file paths
      const processedOptions = options.map((option: any, index: number) => {
        if (typeof option === "object" && option.fileIndex !== undefined) {
          const file = files[option.fileIndex];
          if (file) {
            return `/uploads/${file.filename}`; // Replace with the file path
          }
        }
        return option; // Keep text options as-is
      });

      // Save the question in the database
      const newQuestion = await Question.create({
        quiz_id,
        question,
        options: processedOptions,
        correct_answer,
      });

      createdQuestions.push(newQuestion);
    }

    res.status(200).json({
      message: "Questions added successfully",
      questions: createdQuestions,
    });
    return;
  } catch (error) {
    console.error("Error in questionAdding:", error);
    res.status(500).json({ message: "Internal Server Error", error });
    return;
  }
};

export const uploadMiddleware = multer({ storage }).array("options"); // Expecting multiple files in the `options` field

/**
 * @swagger
 * /questions/:
 *   get:
 *     summary: Get all questions for a specific quiz
 *     tags: [Questions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quiz_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Questions retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Questions found successfully"
 *                 questions:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Question'
 *       500:
 *         description: Server error
 */
export const getQuestions = async (req: Request, res: Response) => {
  try {
    const { quiz_id } = req.params;
    const questions = await Question.findAll({
      where: { quiz_id },
    });
    res
      .status(200)
      .json({ message: "Questions found successfully", questions });
  } catch (error) {
    console.log(error);
  }
};
/**
 * @swagger
 * /questions/update/{userId}:
 *   put:
 *     summary: Update an existing question (admin or sub_admin only)
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user updating the question
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quiz_id:
 *                 type: integer
 *                 example: 1
 *               question_text:
 *                 type: string
 *                 example: "Updated question text"
 *               correct_answer:
 *                 type: string
 *                 example: "Updated answer"
 *               questionId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Question updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "question updated successfully"
 *                 updatedQuestion:
 *                   type: integer
 *                   example: 1
 *       403:
 *         description: Not eligible to update question
 *       500:
 *         description: Server error
 */

// export const questionUpdate = async (req: Request, res: Response) => {
//   try {
//     const { userId } = req.params;
//     const {
//       quiz_id,
//       question_title,
//       question_choices,
//       correct_answer,
//       questionId,
//     } = req.body;
//     const userEligible = await User.findOne({ where: { id: userId } });
//     if (userEligible?.role === "sub_admin" || "admin") {
//       const updatedQuestion = await Question.update(
//         { question_choices, correct_answer, question_title },
//         { where: { id: questionId, quiz_id } }
//       );
//       res
//         .status(200)
//         .json({ message: "question updated successfully", updatedQuestion });
//     } else {
//       res.json({ message: "you are not elligible to update feedback" });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
/**
 * @swagger
 * /questions/delete/{questionId}:
 *   delete:
 *     summary: Delete a question from a quiz (admin or sub_admin only)
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the question to delete
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Question deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "question deleted successfully"
 *                 deletedQuestion:
 *                   type: integer
 *                   example: 1
 *       403:
 *         description: Not eligible to delete question
 *       500:
 *         description: Server error
 */

export const questionDelete = async (req: Request, res: Response) => {
  try {
    const { questionId } = req.params;
    const { userId } = req.body;
    const userEligible = await User.findOne({ where: { id: userId } });
    if (userEligible?.role === "sub_admin" || "admin") {
      const deletedQuestion = await Question.destroy({
        where: { id: questionId },
      });
      res
        .status(200)
        .json({ message: "question deleted successfully", deletedQuestion });
    } else {
      res.json({ message: "you are not elligible to delete question" });
    }
  } catch (error) {
    console.log(error);
  }
};
/**
 * @swagger
 * components:
 *   schemas:
 *     Question:
 *       type: object
 *       required:
 *         - quiz_id
 *         - question_text
 *         - correct_answer
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the question
 *           example: 1
 *         quiz_id:
 *           type: integer
 *           description: ID of the quiz the question belongs to
 *           example: 1
 *         question_text:
 *           type: string
 *           description: The text of the question
 *           example: "What is the capital of France?"
 *         correct_answer:
 *           type: string
 *           description: The correct answer for the question
 *           example: "Paris"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the question was created
 *           example: "2024-11-09T12:00:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the question was last updated
 *           example: "2024-11-09T12:00:00Z"
 */
