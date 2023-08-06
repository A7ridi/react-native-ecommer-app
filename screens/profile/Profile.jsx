import { Image, Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../../components/common/search/backBtn/Button";

const MenuItem = ({ icon, name, action }) => {
  return (
    <TouchableOpacity onPress={action}>
      <View style={styles.menuItem(0.2)}>
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={COLORS.secondary}
        />
        <Text style={styles.menuText(true)}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const clearCache = () => {
    Alert.alert(
      "Clear Cache",
      "Are you sure you want to clear all your saved data?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("cancel"),
          style: styles.cancel,
        },
        { text: "Confirm", onPress: () => console.log("confirmed") },
      ]
    );
  };

  const logout = () => {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      {
        text: "Cancel",
        onPress: () => console.log("cancel"),
        style: styles.cancel,
      },
      { text: "Confirm", onPress: () => console.log("Logged out") },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.gray} />

        <View style={{ width: "100%" }}>
          <Image
            source={require("../../assets/images/space.jpg")}
            style={styles.cover}
          />
        </View>

        <View style={styles.profileContainer}>
          <Image
            source={require("../../assets/images/profile.jpeg")}
            style={styles.profile}
          />

          <Text style={styles.name}>
            {userLoggedIn ? userData.name : "Please log in to your account"}
          </Text>

          {userLoggedIn ? (
            <View style={styles.loginBtn}>
              <Text style={styles.menuText}>afridi@gmail.com</Text>
            </View>
          ) : (
            <View style={{ width: "85%" }}>
              <Button
                title="LOGIN"
                onPress={() => navigation.navigate("Login")}
                login={true}
              />
            </View>
          )}

          {userLoggedIn && (
            <View style={styles.menuWrapper}>
              <MenuItem
                icon="heart-outline"
                name="Favourites"
                action={() => navigation.navigate("Favourites")}
              />
              <MenuItem
                icon="truck-delivery-outline"
                name="Orders"
                action={() => navigation.navigate("Orders")}
              />
              <MenuItem
                icon="bag-suitcase-outline"
                name="Cart"
                action={() => navigation.navigate("Cart")}
              />
              <MenuItem icon="cached" name="Clear Cache" action={clearCache} />
              <MenuItem icon="logout" name="Logout" action={logout} />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;
