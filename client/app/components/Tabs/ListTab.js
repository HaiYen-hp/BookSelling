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
import TabContent from "./TabContent.js";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const w = Dimensions.get("screen").width;

const ListTab = ({ onPress, lisFooter, tabs }) => {
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
        horizontal
        pagingEnabled
        snapToAlignment="center"
        onScroll={onScroll}
        decelerationRate="fast"
        scrollEventThrottle={0}
        showsHorizontalScrollIndicator={false}
      >
        <TabContent onPress={onPress} lisFooterContent={lisFooter} data={data}/>
        <TabContent onPress={onPress} data={data}/>
        <TabContent onPress={onPress} data={data}/>
        {/* <TabContent
          onPress={onPress}
          lisFooter={
            <TabContent
              onPress={onPress}
              lisFooter={<TabContent onPress={onPress} />}
            />
          }
        /> */}
      </ScrollView>
    </View>
  );
};

export default ListTab;

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
