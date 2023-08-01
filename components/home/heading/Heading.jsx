import { Text, View, TouchableOpacity } from "react-native";
import styles from "./heading.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

const Heading = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Arrivals</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProductLists")}>
          <Ionicons
            name="ios-grid"
            size={SIZES.xLarge}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
