import { StyleSheet, View } from "react-native";
import Navigation from "./app/components/NavigationScreen/Navigation";
import { Provider } from "react-redux";
import * as React from "react";
import store from "./app/redux/store";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./app/screens/HomePage";
import { createStackNavigator } from "@react-navigation/stack";
import AccountInfo from "./app/components/AccountInfo/AccountInfo";
import SignInScreen from "./app/components/Authentication/SignInScreen";
import SignUpScreen from "./app/components/Authentication/SignUpScreen";
import Loading from "./app/components/Welcome/Loading";
import WelcomeScreen from "./app/components/Welcome/welcomeScreen";
import ChangeMode from "./app/components/Welcome/ChangeMode";
import SelectedScreen from "./app/components/Welcome/SelectedSignUpAndSignIn";

import { Ionicons,AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Mytabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomePage} options={{
        tabBarIcon: () => (
          <AntDesign name="home" size={24} color="black"/>
        )
      }}/>
      {/* <Tab.Screen name="Cart" component={CartScreen} options={{
        tabBarIcon: () => (
          <AntDesign name="shoppingcart" size={24} color="black"/>
        )
      }}/> */}
      <Tab.Screen name="Profile" component={AccountInfo} options={{
        tabBarIcon: () => (
          <Ionicons name="ios-person-outline" size={24} color="black"/>
        )
      }}/>
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {

  return (
    <View style={styles.container}>
      <Provider store={store}>
      <Navigation/>
      </Provider>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


