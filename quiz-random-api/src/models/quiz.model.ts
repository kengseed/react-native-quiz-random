import KeyValue from "./keyValue.model";

interface Quiz {
    question: string;
    answers: KeyValue[];
    validAnswer: string;
}

export default Quiz;