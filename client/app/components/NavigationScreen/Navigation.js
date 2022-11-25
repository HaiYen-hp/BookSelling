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
import Setting from "../AccountInfo/Setting";
import Cart from "../cart/Cart";
import Payment from "../payment/Payment";
import EventsList from "../../screens/EventsList";
import EventsListDetails from "../../screens/EventsListDetails";
import DetailPage from "../DetailPage/DetailPage";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Trang chủ" component={HomePage} options={{
        tabBarIcon: () => (
          <AntDesign name="home" size={24} color="black"/>
        )
      }}/>
      {/* <Tab.Screen name="Giỏ hàng" component={Cart} options={{
        tabBarIcon: () => (
          <AntDesign name="shoppingcart" size={24} color="black" />
        )
      }}/> */}
      <Tab.Screen name="Cá nhân" component={AccountInfo} options={{
        tabBarIcon: () => (
          <Ionicons name="ios-person-outline" size={24} color="black"/>
        )
      }}/>
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
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
        <Stack.Screen name="Change Mode" component={ChangeMode} />
        <Stack.Screen name="Selected Screen" component={SelectedScreen} />
        <Stack.Screen name="Sign Up Screen" component={SignUpScreen} />
        <Stack.Screen name="Sign In Screen" component={SignInScreen} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="EventsList" component={EventsList} />
        <Stack.Screen name="EventsListDetails" component={EventsListDetails} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
        
        <Stack.Screen name="HomePage" component={MyTabs} />
        <Stack.Screen name="Trang chủ" component={MyTabs} />
        {/* <Stack.Screen name="Giỏ hàng" component={MyTabs} /> */}
        <Stack.Screen name="Cá nhân" component={MyTabs} />




      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
