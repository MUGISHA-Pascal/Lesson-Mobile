import { Router } from "express";
import {
  getQuestions,
  questionAdding,
  questionDelete,
  uploadMiddleware,
  // questionUpdate,
} from "../controllers/QuestionController";
import QuestionUpload from "../middlewares/QuestionUpload";

const questionRoutes = Router();
questionRoutes.post(
  "/add/:userId",
  QuestionUpload.array("options"),
  questionAdding
);
questionRoutes.get("/:quiz_id", getQuestions);
// questionRoutes.put("/update/:userId", questionUpdate);
questionRoutes.delete("/delete/:questionId", questionDelete);
export default questionRoutes;
