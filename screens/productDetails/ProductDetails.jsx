import { Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./details.style";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const ProductDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="heart" size={30} color={COLORS.red} />
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
        }}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Lorem, ipsum dolor.</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ 456.78</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} size={24} name="star" color="gold" />
            ))}

            <Text style={styles.ratingText}> (4.9)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
