"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionDelete = exports.questionUpdate = exports.getQuestions = exports.questionAdding = void 0;
const User_1 = __importDefault(require("../models/User"));
const Questions_1 = __importDefault(require("../models/Questions"));
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
const questionAdding = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const { quiz_id, question_text, correct_answer } = req.body;
        const userEligible = yield User_1.default.findOne({ where: { id: userId } });
        if ((userEligible === null || userEligible === void 0 ? void 0 : userEligible.role) === "sub_admin" || "admin") {
            const question = yield Questions_1.default.create({
                quiz_id,
                question_text,
                correct_answer,
            });
            res
                .status(200)
                .json({ message: "question added successfully", question });
        }
        else {
            res.json({ message: "you are not elligible to add question" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.questionAdding = questionAdding;
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
const getQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { quiz_id } = req.body;
        const questions = yield Questions_1.default.findAll({
            where: { quiz_id },
        });
        res
            .status(200)
            .json({ message: "Questions found successfully", questions });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getQuestions = getQuestions;
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
const questionUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const { quiz_id, question_text, correct_answer, questionId } = req.body;
        const userEligible = yield User_1.default.findOne({ where: { id: userId } });
        if ((userEligible === null || userEligible === void 0 ? void 0 : userEligible.role) === "sub_admin" || "admin") {
            const updatedQuestion = yield Questions_1.default.update({ question_text, correct_answer }, { where: { id: questionId, quiz_id } });
            res
                .status(200)
                .json({ message: "question updated successfully", updatedQuestion });
        }
        else {
            res.json({ message: "you are not elligible to update feedback" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.questionUpdate = questionUpdate;
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
const questionDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { questionId } = req.params;
        const { userId } = req.body;
        const userEligible = yield User_1.default.findOne({ where: { id: userId } });
        if ((userEligible === null || userEligible === void 0 ? void 0 : userEligible.role) === "sub_admin" || "admin") {
            const deletedQuestion = yield Questions_1.default.destroy({
                where: { id: questionId },
            });
            res
                .status(200)
                .json({ message: "question deleted successfully", deletedQuestion });
        }
        else {
            res.json({ message: "you are not elligible to delete question" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.questionDelete = questionDelete;
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