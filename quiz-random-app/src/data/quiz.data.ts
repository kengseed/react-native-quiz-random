import Quiz from "../models/quiz.model";

export const Questions: Quiz[] = [
    {
        question: "What is server side programming language ?",
        answers: ["CSS", "C#", "HTML", "All choice are correct"],
        validAnswer: "C#",
    },
    {
        question: "What is result for 1/0 ?",
        answers: ["0", "1", "ERROR Div 0", "All choice are correct"],
        validAnswer: "ERROR Div 0",
    },
    {
        question: "What is district to outside Bangkok ?",
        answers: ["Patumthani", "Prakanong", "Prawet", "All choice are correct"],
        validAnswer: "Patumthani",
    }
];