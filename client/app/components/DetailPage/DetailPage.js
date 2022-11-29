import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import TopIconAllPage from "../cards/TopIconAllPage";
import AppLoading from "expo-app-loading";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import ListTabDetail from "../Tabs/ListTabDetail";
import ProductElement from "../Product/ProductElement";
import ListImageRow from "../Tabs/ListImageRow";
import BackIcon from "../buttons/BackIcon";
import { useState } from "react";

function DetailPage({ navigation }) {
  const [loaded] = useFonts({
    SansCasual: require("../../../assets/fonts/RecursiveSansCslSt-Regular.ttf"),
    SansCasualMedium: require("../../../assets/fonts/RecursiveSansCslSt-Med.ttf"),
    SansCasualBold: require("../../../assets/fonts/RecursiveSansCslSt-Bold.ttf"),
  });
  if (!loaded) {
    return <AppLoading />;
  }
  const image = { uri: "" };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ width: "100%", height: 550 }}>
          <ImageBackground
            style={styles.image}
            source={require("../../../assets/images/nhocnicolas.png")}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ marginTop: 35 }}>
                <BackIcon navigation={() => navigation.goBack()} />
              </View>
              <TopIconAllPage />
            </View>
          </ImageBackground>
        </View>

        <View style={styles.DetailOne}>
          <View style={{ marginLeft: "5%", marginRight: "5%" }}>
            <View>
              <Text style={styles.TextImg}>
                Sapiens Lược Sử Loài Người (Tái Bản)
              </Text>
            </View>

            <View style={styles.DanhGia}>
              <View style={{ color: "yellow", flexDirection: "row" }}>
                <AntDesign name="star" size={24} color="#EEE730" />
                <AntDesign name="star" size={24} color="#EEE730" />
                <AntDesign name="star" size={24} color="#EEE730" />
                <AntDesign name="star" size={24} color="#EEE730" />
                <AntDesign name="star" size={24} />
                <Text style={{ fontSize: 15, marginLeft: 20 }}>
                  (100 lượt đánh giá) |
                </Text>
                <Text style={{ fontSize: 15 }}> Đã bán 2000+</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={{ fontSize: 20 }}>1.000.0000.000đ</Text>
              <Text style={{ fontSize: 20, color: "red" }}> -36%</Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <View style={{ color: "red" }}>
                <AntDesign name="heart" size={25} color="red" />
              </View>
              <Text style={{ paddingRight: 50, paddingLeft: 10, fontSize: 15 }}>
                Like
              </Text>
              <SimpleLineIcons name="share-alt" size={25} />
              <Text style={{ paddingLeft: 10, fontSize: 15 }}>Share</Text>
            </View>

            {/* <ListTabDetail /> */}
          </View>
        </View>

        <View style={styles.DetailTwo}>
          <View
            style={{
              marginLeft: "5%",
              marginRight: "5%",
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 20, fontFamily: "SansCasual" }}>
                Giao hàng đến Q.Đống đa, P.Kim Liên, Hà Nội
              </Text>
              <MaterialIcons name="navigate-next" size={30} color="black" />
            </View>
            <View
              style={{
                borderRadius: 20,
                borderColor: "#A68C8C",
                borderWidth: 2,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  fontSize: 20,
                  marginTop: 10,
                  paddingLeft: 20,
                }}
              >
                <Text
                  style={{ color: "red", fontWeight: "bold", fontSize: 20 }}
                >
                  Nhanh
                </Text>
                <Text style={{ paddingLeft: 10, fontSize: 20, color: "green" }}>
                  Thứ năm, ngày 8/11
                </Text>
              </View>
              <Text style={{ fontSize: 20, marginBottom: 10, paddingLeft: 20 }}>
                Vận chuyển: 15.000đ
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{ backgroundColor: "white", marginTop: 20, marginBottom: 20 }}
        >
          <View style={styles.DetailThree}>
            <Text style={{ fontSize: 25, fontFamily: "SansCasualBold" }}>
              Sản phẩm tương tự
            </Text>
            <MaterialIcons name="navigate-next" size={30} color="black" />
          </View>
        </View>

        <ProductElement />

        <View style={styles.buttonAllContanier}>
          <Text style={{ fontFamily: "SansCasual", fontSize: 20 }}>
            Xem Thêm
          </Text>
          <AntDesign name="down" size={24} color="black" />
        </View>

        <View style={styles.DetailFour}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "SansCasualBold",
              marginLeft: 10,
              marginTop: 20,
            }}
          >
            Sản Phẩm Đã Xem
          </Text>
          <ListImageRow />
        </View>
      </ScrollView>
      <View style={styles.DetailFive}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          <View>
            <Text style={{ fontSize: 15 }}>Giá trị</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                1900.000 đ{" "}
              </Text>
              <Text style={{ fontSize: 10 }}>299.000 đ</Text>
            </View>
          </View>

          <View style={styles.ButtonBuy}>
            <Text style={{ alignItems: "center" }}>CHỌN MUA</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  DanhGia: {
    backgroundColor: "white",
    width: "100%",
    marginTop: 10,
  },
  TextImg: {
    width: "90%",
    fontSize: 34,
    fontFamily: "SansCasualBold",
  },
  buttonAllContanier: {
    justifyContent: "center",
    flexDirection: "row",
    marginEnd: 25,
    alignItems: "center",
    marginTop: 25,
  },
  DetailOne: {
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: "white",
    width: "100%",
  },
  DetailTwo: {
    backgroundColor: "white",
    marginTop: 20,
  },
  DetailThree: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: 20,
  },
  DetailFour: {
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  ButtonBuy: {
    justifyContent: "center",
    backgroundColor: "#CAC659",
    alignItems: "center",
    width: "40%",
    height: "100%",
    borderRadius: 15,
  },
  DetailFive: {
    width: "100%",
    height: 90,
    backgroundColor: "white",
    justifyContent: "center",
  },
});
