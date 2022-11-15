import { StyleSheet, View } from "react-native";
import Navigation from "./app/components/NavigationScreen/Navigation";
import { Provider as PaperProvider } from "react-native-paper";

import HomePage from "./app/screens/HomePage";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomePage/> */}
      <Navigation />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


