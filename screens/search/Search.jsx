import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchView from "../../components/common/search/Search";
import useSearch from "../../hooks/useSearch";
import { COLORS, SIZES } from "../../constants";
import styles from "./style";
import ProductCardView from "../../components/products/ProductCardView";
import SearchTiles from "../../components/searchTile/SearchTiles";

const Search = () => {
  const { searchProducts, products, loading } = useSearch();

  return (
    <SafeAreaView>
      <SearchView searchProducts={searchProducts} />

      {loading ? (
        <View style={styles.productListLoadingContainer}>
          <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
        </View>
      ) : products.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
          <Text style={styles.searchText}>No product found</Text>
        </View>
      ) : (
        <View style={styles.productListContainer}>
          <FlatList
            data={products}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <SearchTiles item={item} />}
            // contentContainerStyle={styles.productListContainer}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Search;
