import { Text, View, TouchableOpacity } from "react-native";
import styles from "./heading.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../constants";

const Heading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Arrivals</Text>
        <TouchableOpacity>
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
