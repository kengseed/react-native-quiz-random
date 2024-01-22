import React from "react";
import {
    View
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigator-stack-params";
import MainStyle from "../../styles/main.style";

type screenProp = NativeStackScreenProps<RootStackParams, "WinnerScreen">;

const WinnerScreen = (props: screenProp) => {
    const { navigation, route } = props;

    return (
        <View style={MainStyle.container}>
            
        </View>
    );
}

export default WinnerScreen; 