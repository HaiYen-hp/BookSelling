import { View, Text, ImageBackground, StyleSheet } from "react-native";
import ButtonBot from "../buttons/ButtonBot";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../../assets/images/get-start.png")}
      >
        <Text style={styles.text}>CHÀO MỪNG ĐẾN VỚI BOOK STORE APP</Text>
        <ButtonBot
          text="BẮT ĐẦU"
          navigation={() => navigation.navigate("Change Mode")}
        ></ButtonBot>
      </ImageBackground>
    </View>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
  },
  text: {
    color: "#1A9814",
    fontSize: 40,
    fontWeight: "400",
    lineHeight: 55,
    fontWeight: "bold",
    marginTop: 200,
    textAlign: "center",
    marginLeft: 30,
    marginRight: 30,
  },
});
