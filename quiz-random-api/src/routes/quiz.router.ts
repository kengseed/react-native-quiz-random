import { Router } from "express";
import controller from "../controllers/quiz.controller";

const router: Router = Router();

//Routing
router.get("/quiz/randomQuestions", controller.getRandomQuestions);

export default router;