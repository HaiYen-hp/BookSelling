import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import themes from "../../../config/themes";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import TabDetail from "./TabDetail";
const w = Dimensions.get("screen").width;

const ListTabHPDetail = ({ onPress, lisFooter, tabs, data }) => {
  const [selected, setSelected] = useState(0);

  const onScroll = ({ nativeEvent }) => {
    const index = Math.round(nativeEvent.contentOffset.x / (w - 20));

    setSelected(index);
  };
  const [loaded] = useFonts({
    SansCasual: require("../../../assets/fonts/RecursiveSansCslSt-Regular.ttf"),
    SansCasualMedium: require("../../../assets/fonts/RecursiveSansCslSt-Med.ttf"),
    SansCasualBold: require("../../../assets/fonts/RecursiveSansCslSt-Bold.ttf"),
  });
  if (!loaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {tabs.map((e, i) => (
          <Pressable onPress={() => setSelected(i)}>
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.title,
                  selected == i && { color: themes.colors.mainText },
                ]}
              >
                {e}
              </Text>
            </View>
            {selected == i && <View style={styles.line} />}
          </Pressable>
        ))}
      </View>
      <ScrollView
        pagingEnabled
        snapToAlignment="center"
        onScroll={onScroll}
        decelerationRate="fast"
        scrollEventThrottle={0}
        showsHorizontalScrollIndicator={false}
      >
        <TabDetail data={data} tabs={tabs} />
      </ScrollView>
    </View>
  );
};

export default ListTabHPDetail;

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontFamily: "SansCasualBold",
    color: "gray",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 7,
    marginTop: 15,
  },
  line: {
    width: 80,
    height: 5,
    backgroundColor: themes.colors.main,
    alignSelf: "center",
    marginTop: 4,
  },
  textContainer: {
    marginHorizontal: 20,
  },
});
