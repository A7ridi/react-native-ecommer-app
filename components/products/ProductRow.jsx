import { View, FlatList, ActivityIndicator, Text } from "react-native";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import styles from "./product.style";
import useFetch from "../../hooks/useFetch";

const ProductRow = () => {
  const { products, loading, error } = useFetch();

  return (
    <View style={styles.productRowContainer}>
      {loading ? (
        <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCardView item={item} />}
          keyExtractor={(item) => item._id}
          horizontal
          contentContainerStyle={{ marginLeft: SIZES.xxSmall }}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default ProductRow;
