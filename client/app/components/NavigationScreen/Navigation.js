import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../Authentication/SignUpScreen";
import SignInScreen from "../Authentication/SignInScreen";
import Loading from "../Welcome/Loading";
import WelcomeScreen from "../Welcome/welcomeScreen";
import ChangeMode from "../Welcome/ChangeMode";
import SelectedScreen from "../Welcome/SelectedSignUpAndSignIn";
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome Screen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
        <Stack.Screen name="Change Mode" component={ChangeMode} />
        <Stack.Screen name="Selected Screen" component={SelectedScreen} />
        <Stack.Screen name="Sign Up Screen" component={SignUpScreen} />
        <Stack.Screen name="Sign In Screen" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
