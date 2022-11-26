import SearchingTab from "../components/Tabs/SearchingTab";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import React from "react";
import { useState } from "react";
import ProductElement from "../components/Product/ProductElement";

function ListProductPage({ navigation }) {
  const [icon, setIcon] = useState("ios-grid-outline");
  //   const handleIconPress = () => {
  //     if (icon == "ios-list-outline") {
  //       return <ProductElement />;
  //     } else if (icon == "ios-grid-outline") {
  //       return <ProductElementVer2 />;
  //     }
  //   };
  const [loaded] = useFonts({
    SansCasual: require("../../assets/fonts/RecursiveSansCslSt-Regular.ttf"),
    SansCasualMedium: require("../../assets/fonts/RecursiveSansCslSt-Med.ttf"),
    SansCasualBold: require("../../assets/fonts/RecursiveSansCslSt-Bold.ttf"),
  });
  if (!loaded) {
    return <AppLoading />;
  }
  return (
    <View>
      <View style={styles.tabContainer}>
        <SearchingTab navigation={navigation} />
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
      </View>
      <View style={styles.tabContanier}>
        <Text style={styles.text}>Mới Nhất</Text>
        <Text style={styles.text}>Bán Chạy</Text>
        <Text style={styles.text}>Giá</Text>
        <View>
          <AntDesign name="up" size={10} color="black" />
          <AntDesign name="down" size={10} color="black" />
        </View>
        <View style={{ marginLeft: 90 }}>
          <AntDesign name="filter" size={24} color="black" />
        </View>
        <Text style={styles.text}>Lọc</Text>
      </View>
      <ProductElement />
    </View>
  );
}
export default ListProductPage;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  tabContainer: {
    flexDirection: "row",
    marginTop: 70,
    marginLeft: 15,
    alignItems: "center",
  },
  tabContanier: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  text: {
    paddingHorizontal: 10,
    fontFamily: "SansCasual",
  },
});
