import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../Authentication/SignUpScreen";
import SignInScreen from "../Authentication/SignInScreen";
import Loading from "../Welcome/Loading";
import WelcomeScreen from "../Welcome/welcomeScreen";
import ChangeMode from "../Welcome/ChangeMode";
import SelectedScreen from "../Welcome/SelectedSignUpAndSignIn";
import HomePage from "../../screens/HomePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import AccountInfo from "../AccountInfo/AccountInfo";
import EventsList from "../../screens/EventsList";
import EventsListDetails from "../../screens/EventsListDetails";
import ListTab from "../Tabs/ListTab";
import TabContent from "../Tabs/TabContent";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={HomePage}
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AccountInfo}
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-person-outline" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome Screen"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
        <Stack.Screen name="Change Mode" component={ChangeMode} />
        <Stack.Screen name="Selected Screen" component={SelectedScreen} />
        <Stack.Screen name="Sign Up Screen" component={SignUpScreen} />
        <Stack.Screen name="Sign In Screen" component={SignInScreen} />
        <Stack.Screen name="HomePage" component={MyTabs} />
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Profile" component={MyTabs} /> */}
        <Stack.Screen name="EventsList" component={EventsList} />
        <Stack.Screen name="EventsListDetails" component={EventsListDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
