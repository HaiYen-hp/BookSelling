import { StyleSheet, View } from "react-native";
import Navigation from "./app/components/NavigationScreen/Navigation";
import * as React from "react";

export default function App() {
  return (
    <View style={styles.container}>
        <Navigation />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
