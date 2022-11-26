import SearchingTab from "../components/Tabs/SearchingTab";
import { View, StyleSheet } from "react-native";
import { AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import React from "react";
import { useState } from "react";
import ProductElement from "../components/Product/ProductElement";
import ProductElementVer2 from "../components/Product/ProductElementVer2";

function ListProductPage({ navigation }) {
  const [icon, setIcon] = useState("ios-grid-outline");
  const handleIconPress = () => {
    if (icon == "ios-list-outline") {
      return <ProductElement />;
    } else if (icon == "ios-grid-outline") {
      return <ProductElementVer2 />;
    }
  };
  return (
    <View style={styles.tabContainer}>
      <SearchingTab />
      <Ionicons
        name={icon}
        size={27}
        color="black"
        style={{ marginLeft: 10, opacity: 0.6 }}
        // onPress={() =>
        //   handleIconPress &&
        //   (icon == "ios-list-outline" ? setIcon("ios-grid-outline") : setIcon("ios-list-outline"))
        // }
      />
      <ProductElement />
    </View>
  );
}
export default ListProductPage;
const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    marginTop: 70,
    marginLeft: 15,
    alignItems: "center",
  },
});
