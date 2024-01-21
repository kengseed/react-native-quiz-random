import Quiz from "../models/quiz.model";

export type RootStackParams = {
    WelcomeScreen: undefined;
    QuizScreen: undefined;
    SummaryScreen: { score: number, questions: Quiz[] }
};