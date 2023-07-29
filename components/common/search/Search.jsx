import { View, TouchableOpacity, TextInput } from "react-native";
import styles from "./search.style";
import { COLORS, SIZES } from "../../../constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";

const Search = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [text, setText] = useState("");
  console.log(route);

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity>
        <Ionicons name="camera-outline" size={24} style={styles.searchIcon} />
      </TouchableOpacity>

      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value={text}
          onChangeText={setText}
          onPressIn={() => {
            if (route.name.toLowerCase() === "search") return null;
            navigation.navigate("Search");
          }}
          placeholder="Search anything..."
        />
      </View>

      <View>
        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={SIZES.xLarge} color={COLORS.offwhite} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
