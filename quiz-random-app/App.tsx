import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "./src/screens/navigator-stack-params";
import WelcomeScreen from "./src/screens/welcome/welcome.screen";
import QuizScreen from "./src/screens/quiz/quiz.screen";
import SummaryScreen from "./src/screens/summary/summary.screen"

//Create Stack navigator
const Stack = createNativeStackNavigator<RootStackParams>();

//export default function App() {
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" options={{ title: 'Welcome to Quiz' }} component={WelcomeScreen} />
        <Stack.Screen name="QuizScreen" options={{ title: 'Please answer the question' }} component={QuizScreen} />
        <Stack.Screen name="SummaryScreen" options={{ title: 'Summary Status' }} component={SummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
