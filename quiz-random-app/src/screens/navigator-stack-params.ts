import Quiz from "../models/quiz.model";
import UserScore from "../models/userScore.model";

export type RootStackParams = {
    WelcomeScreen: undefined;
    QuizScreen: { userName: string };
    SummaryScreen: { userName: string, score: number, questions: Quiz[] };
    WinnerScreen: { userScores: UserScore[] }
};