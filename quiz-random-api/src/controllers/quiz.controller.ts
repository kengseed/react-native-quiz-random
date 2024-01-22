import { Request, Response, NextFunction } from "express";
import * as fs from 'fs';
import Quiz from "../models/quiz.model";

class QuizController {
    private dataList: Quiz[] = [];

    constructor() {
        this.initialize();
    }

    private initialize() {
        this.getRandomQuestions = this.getRandomQuestions.bind(this);
        this.dataList = this.getQuestionsFromJsonFile();
    }

    private getQuestionsFromJsonFile() {
        let file = fs.readFileSync("./src/data/questions.json", "utf8");
        let data = JSON.parse(file) as Quiz[];

        return data;
    }

    private shuffleArray(array: Quiz[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    getRandomQuestions(req: Request, res: Response, next: NextFunction) {
        this.dataList = this.shuffleArray(this.dataList);

        res.json({ data: this.dataList });
    }
}

export default new QuizController();