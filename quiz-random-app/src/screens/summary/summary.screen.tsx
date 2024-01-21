import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Button, 
    Pressable
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigator-stack-params";
import MainStyle from "../../styles/main.style";

type screenProp = NativeStackScreenProps<RootStackParams, "SummaryScreen">;

const SummaryScreen = (props: screenProp) => {
    const { navigation, route } = props;

    return (
        <View style={MainStyle.container}>
            <Text style={MainStyle.textHeader}>
                Summary score: {route.params.score} / {route.params.questions.length}
            </Text>
            <Pressable style={MainStyle.button} onPress={() => navigation.navigate('WelcomeScreen')}>
                <Text style={MainStyle.buttonText}>Back to home</Text>
            </Pressable>
        </View>
    );
}

export default SummaryScreen; 