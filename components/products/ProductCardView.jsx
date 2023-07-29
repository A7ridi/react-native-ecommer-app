import { Text, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./product.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            style={styles.productImage}
          />
        </View>

        <View style={styles.cardDetails}>
          <Text style={styles.title} numberOfLines={1}>
            Lorem ipsum dolor sit amet.
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Supplier
          </Text>
          <Text style={styles.price}>$ 234</Text>
        </View>

        <TouchableOpacity style={styles.addCartBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
