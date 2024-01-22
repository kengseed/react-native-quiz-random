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
import KeyValue from "../../models/keyValue.model";
import MainStyle from "../../styles/main.style";
import AppConfig from "../../config/appConfig";

type screenProp = NativeStackScreenProps<RootStackParams, "SummaryScreen">;

interface QuizResult {
    data: Quiz[]
}

const QuizScreen = (props: screenProp) => {
    const { navigation, route } = props;

    //Config state
    const [questionResult, setQuestionResult] = useState<QuizResult>();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [refreshing, setRefreshing] = useState(false);

    //Set current question and score
    const setAnswerState = (data: KeyValue) => {
        if (data.key === questionResult?.data[currentQuestion].validAnswer) setScore(score + 1);

        setCurrentQuestion(currentQuestion + 1);

        //Go to next screen if done all questions
        if ((questionResult != null) && (currentQuestion >= questionResult?.data.length - 1)) {
            navigation.navigate("SummaryScreen", { userName: route.params.userName, score: score, questions: questionResult.data });
        }
    };

    const onRefresh = useCallback(() => {
        refreshData();
    }, []);

    const refreshData = () => {
        fetch(AppConfig.baseUrl + "/quiz/randomQuestions")
            .then((res) => res.json())
            .then((json) => {
                setRefreshing(true);

                //Cast to strong types
                let data = JSON.parse(JSON.stringify(json)) as QuizResult;

                //Bind data
                setQuestionResult(data);
                setCurrentQuestion(0);
                setScore(0);
                setRefreshing(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    //Async call api and callback to bind UI
    useEffect(() => {
        refreshData();
    }, []);

    if (!refreshing && (questionResult != null) && (currentQuestion < questionResult?.data.length)) {
        return (
            <ScrollView
                contentContainerStyle={MainStyle.container}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <Text style={MainStyle.textHeader}>
                    {currentQuestion + 1}.{questionResult?.data[currentQuestion].question}
                </Text>

                {
                    questionResult?.data[currentQuestion].answers.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.option} onPress={() => setAnswerState(item)} >
                            <Text style={styles.buttonText}>
                                {item.value}
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