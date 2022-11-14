import { View, StyleSheet, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";

function BackIcon(props) {
  return (
    <Pressable onPress={props.navigation}>
      <View style={styles.backIcon}>
        <Entypo
          style={styles.icon}
          name="chevron-left"
          size={36}
          color="black"
        />
      </View>
    </Pressable>
  );
}
export default BackIcon;

const styles = StyleSheet.create({
  backIcon: {
    flexDirection: "row",
    width: 40,
    height: 40,
    borderRadius: 60,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6e3da",
  },
  icon: {
    // backgroundColor: "#e6e3da",
    borderRadius: 60,
  },
});
