import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { AntDesign } from "@expo/vector-icons";
const w = Dimensions.get("screen").width;

const TabDetail = ({ data }) => {
  const [loaded] = useFonts({
    SansCasual: require("../../../assets/fonts/RecursiveSansCslSt-Regular.ttf"),
    SansCasualMedium: require("../../../assets/fonts/RecursiveSansCslSt-Med.ttf"),
    SansCasualBold: require("../../../assets/fonts/RecursiveSansCslSt-Bold.ttf"),
  });
  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.itemScroll}>
      {data.map((item) => {
        return (
          <View key={item.id.toString()} style={styles.itemContainer}>
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                marginBottom: 9,
              }}
            >
              <Text style={styles.textCa}>Danh mục: ...</Text>
              <AntDesign name="right" size={14} color="black" />
              <Text style={styles.textCa}>{item.category}</Text>
              <AntDesign name="right" size={14} color="black" />
              <Text style={styles.textCa}>{item.categoryDetail}</Text>
            </View>
            <Text style={styles.textItem}>
              Công ty sản xuất: {item.productCompany}
            </Text>
            <Text style={styles.textItem}>
              Ngày xuất bản: {item.releaseDate}
            </Text>
            <Text style={styles.textItem}>Dịch giả: {item.translator}</Text>
            <Text style={styles.textItem}>Loại bìa: {item.coverType}</Text>
            <Text style={styles.textItem}>Số trang: {item.numberOfPage}</Text>
            <Text style={styles.textItem}>
              Nhà xuất bản: {item.editionCompany}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default TabDetail;

const styles = StyleSheet.create({
  itemScroll: {
    width: w,
  },
  itemContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  textCa: {
    fontFamily: "SansCasual",
    fontSize: 15,
  },
  textItem: {
    fontFamily: "SansCasual",
    fontSize: 15,
    marginVertical: 5,
  },
});
