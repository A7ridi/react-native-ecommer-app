import { View, FlatList } from "react-native";
import React from "react";
import { SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import styles from "./product.style";

const ProductRow = () => {
  const products = [1, 2, 3, 4];
  return (
    <View style={styles.productRowContainer}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{ marginLeft: SIZES.xxSmall }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductRow;
