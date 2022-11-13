import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { Fontisto, Ionicons } from "@expo/vector-icons";
const ChangeMode = ({ navigation }) => {
  return (
    <View styles={styles.container}>
      <ImageBackground
        style={styles.img}
        source={require("../../../assets/images/alex-lvrs-ZRTd9_Fk6rc-unsplash.jpg")}
      >
        <Text style={styles.textHeader}> Chọn Chế Độ </Text>
        <View style={styles.modeContainerSun}>
          <View style={styles.iconContainer}>
            <Fontisto name="day-sunny" size={35} style={styles.iconSun} />
            <Text style={styles.iconDescSun}>Sáng</Text>
          </View>
        </View>
        <View style={styles.modeContainerMoon}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="md-moon-outline"
              size={35}
              style={styles.iconMoon}
            />
            <Text style={styles.iconDescMoon}>Tối</Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Pressable onPress={() => navigation.navigate("Selected Screen")}>
            <View style={styles.btnStart}>
              <Text style={styles.textStart}>TIẾP TỤC</Text>
            </View>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};
export default ChangeMode;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  img: {
    width: 400,
    height: 800,
  },
  textHeader: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 24,
    marginTop: 95,
    textAlign: "center",
  },
  modeContainerSun: {
    flexDirection: "row",
    marginLeft: 70,
    marginTop: 138,
  },
  modeContainerMoon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 70,
    marginTop: 35,
  },
  iconContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  iconSun: {
    color: "#FBFBFB",
    padding: 15,
  },
  iconMoon: {
    color: "#000000",
    padding: 15,
  },
  iconDescSun: {
    textAlign: "center",
    color: "#FBFBFB",
    fontWeight: "500",
    fontSize: 18,
  },
  iconDescMoon: {
    textAlign: "center",
    color: "#000000",
    fontWeight: "500",
    fontSize: 18,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btnStart: {
    width: 325,
    height: 80,
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#C8C23C",
    marginTop: 200,
  },
  textStart: {
    color: "white",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    textAlign: "center",
  },
});
