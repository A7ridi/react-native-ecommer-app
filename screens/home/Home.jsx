import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import Carousel from "../../components/home/Carousel";
import { Welcome } from "../../components";
import Headings from "../../components/home/heading/Heading";
import ProductRow from "../../components/products/ProductRow";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={24} />
            <Text style={styles.location}>Delhiii, India</Text>
          </View>

          <View style={styles.cartCountContainer}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Fontisto name="shopping-bag" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
