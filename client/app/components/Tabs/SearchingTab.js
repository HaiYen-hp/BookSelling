import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import React from "react";
import { useState } from "react";
const { width, height } = Dimensions.get("screen");
const SearchingTab = ({ navigation }) => {
  const [text, onChangeText] = React.useState(null);
  return (
    <View style={styles.tabContainer}>
      <View style={styles.backIcon}>
        <AntDesign
          name="left"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.inputContainer}>
        <EvilIcons
          name="search"
          size={33}
          color="black"
          style={{ opacity: 0.5 }}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Tìm Kiếm Trên Book Store"
        ></TextInput>
      </View>
    </View>
  );
};
export default SearchingTab;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    borderColor: "#000000",
    borderRadius: 15,
    borderWidth: 1,
    paddingTop: 7,
    paddingBottom: 7,
  },
  backIcon: {
    marginRight: 10,
    padding: 10,
    backgroundColor: "#eeeeee",
    borderRadius: 22,
  },
  input: {
    width: width / 1.69,
  },
});
