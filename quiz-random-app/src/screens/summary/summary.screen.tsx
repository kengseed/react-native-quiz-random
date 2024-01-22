import React from "react";
import {
    View,
    Text,
    Pressable
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigator-stack-params";
import MainStyle from "../../styles/main.style";
import Winnerboard from "../../components/Winnerboard";

type screenProp = NativeStackScreenProps<RootStackParams, "SummaryScreen">;


const SummaryScreen = (props: screenProp) => {
    const { navigation, route } = props;

    return (
        <View style={MainStyle.container}>
            <Pressable style={MainStyle.button} onPress={() => navigation.navigate('WelcomeScreen')}>
                <Text style={MainStyle.buttonText}>Back to home</Text>
            </Pressable>
            <Text style={MainStyle.textHeader}>
                User: {route.params.userName} {"\n"}
                Score: {route.params.score} / {route.params.questions.length}
            </Text>

            <Winnerboard userName={route.params.userName} score={route.params.score}></Winnerboard>
        </View>
    );
}

export default SummaryScreen; 