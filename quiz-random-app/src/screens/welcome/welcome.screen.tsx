import React from "react";
import {
    Pressable,
    Text,
    View,
    TextInput
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigator-stack-params";
import MainStyle from "../../styles/main.style";

type screenProp = NativeStackScreenProps<RootStackParams, "WelcomeScreen">;

const WelcomeScreen = (props: screenProp) => {
    const [text, onChangeText] = React.useState('john');
    const { navigation, route } = props;

    return (
        <View style={MainStyle.container}>
            <TextInput
                style={MainStyle.input}
                onChangeText={onChangeText}
                value={text}
            />
            <Pressable style={MainStyle.button} onPress={() => navigation.navigate('QuizScreen')}>
                <Text style={MainStyle.buttonText}>Start</Text>
            </Pressable>
        </View>
    );
}

export default WelcomeScreen; 