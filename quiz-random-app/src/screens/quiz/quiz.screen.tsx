import React, {
    useState,
    useEffect
} from "react";
import {
    View,
    StyleSheet,
    Button,
    SafeAreaView,
    Text,
    TouchableOpacity
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigator-stack-params";
import { Questions } from "../../data/quiz.data";
import MainStyle from "../../styles/main.style";

type screenProp = NativeStackScreenProps<RootStackParams, "SummaryScreen">;

const QuizScreen = (props: screenProp) => {
    const { navigation, route } = props; //

    //Config state
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    //Set current question and score
    const setAnswerState = (value: string) => {
        if (value === Questions[currentQuestion].validAnswer) setScore(score + 1);

        setCurrentQuestion(currentQuestion + 1);
    };

    //Go to summary screen if done all questions, and parse results data
    useEffect(() => {
        if (currentQuestion > Questions.length - 1) navigation.navigate("SummaryScreen", { userName: route.params.userName, score: score, questions: Questions });
    }, [currentQuestion]);

    if (currentQuestion < Questions.length) {
        return (
            <View style={MainStyle.container}>
                <Text style={MainStyle.textHeader}>
                    {currentQuestion + 1}.{Questions[currentQuestion].question}
                </Text>

                {
                    Questions[currentQuestion].answers.map((value, index) => (
                        <TouchableOpacity key={index} style={styles.option} onPress={() => setAnswerState(value)} >
                            <Text style={styles.buttonText}>
                                {value}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        );
    }
};

const styles = StyleSheet.create({
    option: {
        backgroundColor: '#737CA1',
        padding: "2%",
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 50,
        marginLeft: "5%",
        marginRight: "5%"
    },
    buttonText: {
        fontSize: 10,
        color: "#FFF"
    }
});

export default QuizScreen; 