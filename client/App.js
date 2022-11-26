import { StyleSheet, View } from "react-native";
import Navigation from "./app/components/NavigationScreen/Navigation";
import * as React from "react";
import DetailPage from "./app/components/DetailPage/DetailPage";

export default function App() {
  return (
    <View style={styles.container}>
        <Navigation />
        {/* <DetailPage/> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
