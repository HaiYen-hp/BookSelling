import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import ListTab from "../components/Tabs/ListTab";
import ITEMLISTS from "./ITEMLISTS";
const { width, height } = Dimensions.get("screen");
const tabs = ["Chi tiết", "Mô tả", "Đánh giá"];
const EventsListDetails = ({ navigation, route }) => {
  const [loaded] = useFonts({
    SansCasual: require("../../assets/fonts/RecursiveSansCslSt-Regular.ttf"),
    SansCasualMedium: require("../../assets/fonts/RecursiveSansCslSt-Med.ttf"),
    SansCasualBold: require("../../assets/fonts/RecursiveSansCslSt-Bold.ttf"),
  });
  if (!loaded) {
    return <AppLoading />;
  }
  const { item } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={item.image}
        style={StyleSheet.absoluteFillObject}
      />
      <View
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor: "#000", opacity: 0.1 },
        ]}
      />
      <AntDesign
        name="close"
        size={28}
        style={{
          padding: 10,
          position: "absolute",
          top: 40,
          right: 22,
          zIndex: 2,
          backgroundColor: "#fff",
          borderRadius: 25,
          opacity: 0.55,
          overflow: "hidden",
        }}
        color="#333"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: "#FAFAFA",
            top: height * 0.65,
            borderRadius: 16,
          },
        ]}
      >
        <View style={styles.contentContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
          <View style={styles.reviewCon}>
            {Array(5)
              .fill(0)
              .map((_) => (
                <AntDesign
                  name="star"
                  size={17}
                  color="#EEE730"
                  style={{ paddingHorizontal: 2 }}
                />
              ))}
            <View style={{ marginLeft: 12 }}>
              <Text style={{ fontFamily: "SansCasualMedium" }}>
                {item.numberOfReview} {" | "} {item.numberOfSale}
              </Text>
            </View>
            <AntDesign
              name="infocirlceo"
              size={15}
              color="black"
              style={{ marginLeft: 5 }}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>{item.price} </Text>
            <Text style={styles.textDis}>{item.discount}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
              justifyContent: "space-between",
              width: width / 2,
            }}
          >
            <Ionicons name="ios-heart-outline" size={24} color="grey" />
            <Text style={styles.text}>Like</Text>
            <SimpleLineIcons name="share-alt" size={24} color="black" />
            <Text style={styles.text}>Share</Text>
          </View>
          {/* <ListTab tabs={tabs} data={ITEMLISTS} /> */}
        </View>
      </View>
    </View>
  );
};
export default EventsListDetails;
const styles = StyleSheet.create({
  contentContainer: {
    marginVertical: 10,
    marginLeft: 10,
  },
  title: {
    flex: 1,
    flexWrap: "wrap",
    fontFamily: "SansCasualBold",
    fontSize: 25,
  },
  reviewCon: {
    marginVertical: 10,
    flexDirection: "row",
    alignContent: "center",
  },
  text: {
    fontFamily: "SansCasual",
    fontSize: 15,
  },
  textDis: {
    fontFamily: "SansCasual",
    fontSize: 15,
    color: "red",
  },
});
