import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import themes from "../../../config/themes";
import ProductElement from "./ProductElement";
const ListProduct = ({ onPress }) => {
  return (
    <ScrollView decelerationRate="fast" scrollEventThrottle={0}>
      <ProductElement onPress={onPress} />
    </ScrollView>
  );
};
export default ListProduct;
