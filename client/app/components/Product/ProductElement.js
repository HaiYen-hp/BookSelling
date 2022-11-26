import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Pressable,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import ITEMLIST from "../../screens/ITEMLIST";
import themes from "../../../config/themes";
import { useState } from "react";
const w = Dimensions.get("screen").width;
const ProductElement = ({ onPress }) => {
  const [color, setColor] = useState("#B4B4B4");
  const [loaded] = useFonts({
    SansCasual: require("../../../assets/fonts/RecursiveSansCslSt-Regular.ttf"),
    SansCasualMedium: require("../../../assets/fonts/RecursiveSansCslSt-Med.ttf"),
    SansCasualBold: require("../../../assets/fonts/RecursiveSansCslSt-Bold.ttf"),
  });
  if (!loaded) {
    return <AppLoading />;
  }
  const renderItem = ({ item }) => {
    return (
      <Pressable style={styles.item} onPress={onPress}>
        <ImageBackground
          style={styles.image}
          imageStyle={{ borderRadius: 15 }}
          source={item.image}
        >
          <Pressable style={styles.buttonHeart}>
            <AntDesign
              name="heart"
              size={20}
              color={color}
              onPress={() => setColor("red", )}
            />
          </Pressable>
        </ImageBackground>
        <View style={styles.body}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.titleItem}>{item.name}</Text>
          </View>
          <View style={styles.reviewContainer}>
            <Text style={styles.bodyItemText}>{item.reviews}</Text>
            <View style={styles.starCon}>
              <AntDesign name="star" size={12} color="#EEE730" />
            </View>
            <Text style={styles.bodyItemText}>
              {""}|{""}
            </Text>
            <Text style={styles.bodyItemText}> {item.numberOfSale}</Text>
          </View>
          <View style={styles.footerCard}>
            <View style={styles.footerItem}>
              <Text style={styles.footerItemText}>{item.price}</Text>
              <Text style={styles.footerItemTextDis}>{item.discount}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <ScrollView
      decelerationRate="fast"
      scrollEventThrottle={0}
      style={{ marginBottom: 170 }}
    >
      <FlatList
        data={ITEMLIST}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        key={(item) => item.id}
      />
    </ScrollView>
  );
};
export default ProductElement;
const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    color: "gray",
  },
  starCon: {
    flexDirection: "row",
  },
  star: {
    marginRight: 5,
  },
  titleItem: {
    flex: 1,
    fontSize: 16,
    fontFamily: "SansCasualMedium",
    flexWrap: "wrap",
  },
  item: {
    marginVertical: 15,
    marginHorizontal: 12,
  },
  body: {
    paddingHorizontal: 10,
    flex: 1,
    marginTop: 15,
  },
  reviewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bodyItemText: {
    fontSize: 11,
    color: "#000000",
    fontFamily: "SansCasual",
  },

  image: {
    width: w / 2.3,
    height: w / 1.5,
    borderRadius: 15,
    backgroundColor: "#D3D3D3",
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  footerCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerItemText: {
    fontSize: 14,
    color: "#000000",
    fontFamily: "SansCasual",
  },
  footerItemTextDis: {
    fontSize: 14,
    color: "red",
    marginStart: 7,
    fontFamily: "SansCasual",
  },
  iconHeart: {
    tintColor: themes.colors.main,
  },
  buttonHeart: {
    position: "absolute",
    right: 15,
    top: 10,
  },
  itemScroll: {
    width: w,
  },
});
