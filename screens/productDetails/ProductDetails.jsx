import { Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./details.style";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { COLORS } from "../../constants";
import useCounter from "../../hooks/useCounter";

const ProductDetails = () => {
  const navigation = useNavigation();
  const { count, increaseCount, decreaseCount } = useCounter();

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
          <View style={styles.rating()}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} size={24} name="star" color="gold" />
            ))}

            <Text style={styles.ratingText}> (4.9)</Text>
          </View>

          <View style={styles.rating(true)}>
            <TouchableOpacity onPress={decreaseCount}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>

            <Text style={styles.ratingText}> {count} </Text>

            <TouchableOpacity onPress={increaseCount}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            unde exercitationem explicabo minima magni dolorum sed nisi rerum
            ipsa dolor id, commodi beatae, illum tenetur veritatis omnis debitis
            ipsum neque?
          </Text>
        </View>

        <View style={styles.locationContainer}>
          <View style={styles.location}>
            <View style={styles.locationIcon}>
              <Ionicons name="location-outline" size={20} />
              <Text> Dallas </Text>
            </View>

            <View style={styles.locationIcon}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text> Free Delivery </Text>
            </View>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
