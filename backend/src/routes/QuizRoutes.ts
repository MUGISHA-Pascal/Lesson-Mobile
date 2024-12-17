import { Router } from "express";
import {
  getQuiz,
  quizAdding,
  quizDelete,
  quizUpdate,
} from "../controllers/QuizController";

const QuizRoutes = Router();
QuizRoutes.post("/add/:userId", quizAdding);
QuizRoutes.get("/:course_id", getQuiz);
QuizRoutes.put("/update/:userId", quizUpdate);
QuizRoutes.delete("/delete/:quizId", quizDelete);
export default QuizRoutes;
