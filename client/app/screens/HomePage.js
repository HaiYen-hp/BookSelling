import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  Animated,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import TopIconHomePage from "../components/cards/TopIconHomePage";
import ListTab from "../components/Tabs/ListTab";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// const { width, height } = Dimensions.get("screen");
// const title = ["Phổ biến", "Bán chạy", "Hàng Mới"];
// const tabs = Object.keys(ITEMS, title).map((i) => ({
//   key: i,
//   title: title[i],
//   source: ITEMS,
//   ref: React.createRef(),
// }));
// const Tab = React.forwardRef(({ item }, ref) => {
//   return (
//     <View ref={ref}>
//       <Text style={styles.textTitle}>{item.title}</Text>
//     </View>
//   );
// });
// const Indicator = ({ measures, scrollX }) => {
//   const inputRange = data.map((_, i) => i * width);
//   const indicatorWidth = scrollX.interpolate({
//     inputRange,
//     outputRange: measures.map((measure) => measure.width),
//   });
//   const translateX = scrollX.interpolate({
//     inputRange,
//     outputRange: measures.map((measure) => measure.x),
//   });
//   return (
//     <Animated.View
//       styles={{
//         position: "absolute",
//         height: 5,
//         backgroundColor: "#E7E25B",
//         borderRadius: 20,
//         width: indicatorWidth,
//         transform: [{ translateX }],
//       }}
//     />
//   );
// };
// const Tabs = ({ data, scrollX }) => {
//   const [measures, setMeasures] = React.useState([]);
//   const containerRef = React.useRef();
//   React.useEffect(() => {
//     let m = [];
//     data.forEach((item) => {
//       item.ref.current.measureLayout(
//         containerRef.current,
//         (x, y, width, height) => {
//           m.push({ x, y, width, height });
//           if (m.length === data.length) {
//             setMeasures(m);
//           }
//         }
//       );
//     });
//   }, []);

//   return (
//     <View style={styles.tabContainer}>
//       <View style={styles.tab} ref={containerRef}>
//         {data.map((item) => {
//           return <Tab key={item.key} item={item} ref={item.ref} />;
//         })}
//       </View>
//       {measures.length > 0 && (
//         <Indicator measures={measures} scrollX={scrollX} />
//       )}
//     </View>
//   );
// };
function HomePage() {
  // const [selectedTab, setSelectedTab] = React.useState(tabs[0]);
  // const scrollX = React.useRef(new Animated.Value(0)).current;
  const [loaded] = useFonts({
    SansCasual: require("../../assets/fonts/RecursiveSansCslSt-Regular.ttf"),
    SansCasualMedium: require("../../assets/fonts/RecursiveSansCslSt-Med.ttf"),
    SansCasualBold: require("../../assets/fonts/RecursiveSansCslSt-Bold.ttf"),
  });
  if (!loaded) {
    return <AppLoading />;
  }
  // const content = Object.keys(api).map((i) => ({
  //     key:i,
  //     name: i,
  //     source: api[i],
  //    ref: React.createRef()
  // }))
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={0}>
        <TopIconHomePage />
        <View style={styles.header}>
          <View style={styles.textBox}>
            <Text style={[styles.headerText, styles.featureProduct]}>
              Sản phẩm nổi bật
            </Text>
            <Text style={[styles.headerText, styles.title]}>
              Nguồn Cội - Tái Bản 2022
            </Text>
            <Text style={[styles.headerText, styles.author]}>Dan Brown</Text>
          </View>
          <View style={styles.headerImage}>
            <Image source={require("../../assets/images/NguonCoi.png")}></Image>
          </View>
          <View style={styles.backgroundImage}>
            <Image
              source={require("../../assets/icons/SanPhamNoiBat.png")}
            ></Image>
          </View>
        </View>
        <ListTab />
        <View style={styles.ideaContanier}>
          <Text style={{ fontFamily: "SansCasualBold", fontSize: 22 }}>
            GỢI Ý
          </Text>
          <View style={styles.buttonAllContanier}>
            <Text style={{ fontFamily: "SansCasual" }}>Xem Tất Cả</Text>
            <AntDesign name="right" size={20} color="black" />
          </View>
        </View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
    // {/* <View style={styles.tabView}>
    //   <Animated.FlatList
    //     data={tabs}
    //     keyExtractor={(item, index) => `${item}-${index}`}
    //     showsHorizontalScrollIndicator={false}
    //     horizontal
    //     pagingEnabled
    //     onScroll={Animated.event(
    //       [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    //       { useNativeDriver: false }
    //     )}
    //     bounces={false}
    //     renderItem={({ item }) => {
    //       return (
    //         <View />
    //           <Tabs scrollX={scrollX} data={item} />
    //           <View style={{ height: "20%" }}>
    //             <FlatList
    //               data={items.source}
    //               keyExtractor={(item) => item.id}
    //               horizontal
    //               showsHorizontalScrollIndicator={false}
    //               renderItem={({ item }) => {
    //                 return (
    //                   <View>
    //                     <ImageBackground
    //                       source={item.image}
    //                       style={styles.img}
    //                     />
    //                     <Text>{item.name}</Text>
    //                     <View style={{ flexDirection: "row" }}>
    //                       <Text>
    //                         {" "}
    //                         {item.price}
    //                         {"  "}
    //                         {item.discount}
    //                       </Text>
    //                     </View>
    //                   </View>
    //                 );
    //               }}
    //             />
    //           </View>
    //       );
    //     }}
    //   />
    //   <Tabs scrollX={scrollX} data={tabs} />
    //   </View> */}
  );
}
export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  header: {
    marginHorizontal: 30,
    marginTop: 20,
    backgroundColor: "#B03131",
    borderRadius: 30,
    height: 180,
    flexDirection: "row",
  },
  textBox: {
    marginLeft: 20,
    width: "50%",
    flexDirection: "column",
  },
  headerText: {
    color: "#FBFBFB",
    marginTop: 20,
    fontFamily: "SansCasual",
  },
  featureProduct: {
    fontSize: 10,
    lineHeight: 12,
  },
  title: {
    fontSize: 18,
    lineHeight: 22,
  },
  author: {
    fontSize: 13,
    lineHeight: 16,
    alignItems: "flex-end",
  },
  headerImage: {
    marginTop: 10,
    zIndex: 1,
  },
  backgroundImage: {
    position: "absolute",
    right: 0,
  },
  buttonTab: {
    paddingHorizontal: 15,
  },
  ideaContanier: {
    flexDirection: "row",
    marginLeft: 20,
    justifyContent: "space-between",
  },
  buttonAllContanier: {
    flexDirection: "row",
    marginEnd: 25,
    alignItems: "center",
  },
  // tabView: {
  //   marginLeft: 26,
  //   marginTop: 18,
  //   height: "25%",
  // },
  // containerListProduct: {
  //   width: "100%",
  //   height: "10%",
  // },
  // img: {
  //   width: "10%",
  //   height: "4%",
  // },
  // tabContainer: {
  //   position: "absolute",
  //   width: "100%",
  // },
  // textTitle: {
  //   color: "#000000",
  //   fontFamily: "SansCasualBold",
  //   fontSize: 60 / tabs.length,
  // },
  // tab: {
  //   flexDirection: "row",
  //   justifyContent: "space-evenly",
  //   flex: 1,
  // },
});
