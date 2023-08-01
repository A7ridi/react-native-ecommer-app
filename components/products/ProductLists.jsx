import { ActivityIndicator, FlatList, View } from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./product.style";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";

const ProductLists = () => {
  const { products, loading, error } = useFetch();

  return (
    <View>
      {loading ? (
        <View style={styles.productListLoadingContainer}>
          <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
        </View>
      ) : (
        <View style={styles.productListContainer}>
          <FlatList
            data={products}
            numColumns={2}
            renderItem={({ item }) => <ProductCardView item={item} />}
            contentContainerStyle={styles.productListContainer}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      )}
    </View>
  );
};

export default ProductLists;
