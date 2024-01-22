import {
    useState,
    useEffect,
    useCallback
} from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Button,
    RefreshControl,
    ScrollView
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigator-stack-params";
import { Questions } from "../../data/quiz.data";
import Quiz from "../../models/quiz.model";
import MainStyle from "../../styles/main.style";

type screenProp = NativeStackScreenProps<RootStackParams, "SummaryScreen">;

const shuffleArray = (array: Quiz[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

const QuizScreen = (props: screenProp) => {
    let data = shuffleArray(Questions);
    const { navigation, route } = props;

    //Config state
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [refreshing, setRefreshing] = useState(false);

    //Set current question and score
    const setAnswerState = (value: string) => {
        if (value === data[currentQuestion].validAnswer) setScore(score + 1);

        setCurrentQuestion(currentQuestion + 1);
    };

    const onRefresh = useCallback(() => {
        data = shuffleArray(data);
        setCurrentQuestion(0);
        setScore(0);

        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    //Go to summary screen if done all questions, and parse results data
    useEffect(() => {
        if (currentQuestion > data.length - 1) navigation.navigate("SummaryScreen", { userName: route.params.userName, score: score, questions: data });
    }, [currentQuestion]);

    if (currentQuestion < data.length) {
        return (
            <ScrollView
                contentContainerStyle={MainStyle.container}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <Text style={MainStyle.textHeader}>
                    {currentQuestion + 1}.{data[currentQuestion].question}
                </Text>

                {
                    data[currentQuestion].answers.map((value, index) => (
                        <TouchableOpacity key={index} style={styles.option} onPress={() => setAnswerState(value)} >
                            <Text style={styles.buttonText}>
                                {value}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
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