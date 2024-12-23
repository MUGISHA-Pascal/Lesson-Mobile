"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const QuestionController_1 = require("../controllers/QuestionController");
const QuestionUpload_1 = __importDefault(require("../middlewares/QuestionUpload"));
const questionRoutes = (0, express_1.Router)();
questionRoutes.post("/add/:userId", QuestionUpload_1.default.array("options"), QuestionController_1.questionAdding);
questionRoutes.get("/:quiz_id", QuestionController_1.getQuestions);
// questionRoutes.put("/update/:userId", questionUpdate);
questionRoutes.delete("/delete/:questionId", QuestionController_1.questionDelete);
exports.default = questionRoutes;
