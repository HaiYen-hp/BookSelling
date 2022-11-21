import { StyleSheet, View } from "react-native";
import Navigation from "./app/components/NavigationScreen/Navigation";
import { Provider } from "react-redux";
import * as React from "react";
import store from "./app/redux/store";

import Setting from "./app/components/AccountInfo/Setting";

export default function App() {
  return (
    <View style={styles.container}>
      <Setting/>      
      {/* <Provider store={store}>
      <Navigation/>
      </Provider> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


