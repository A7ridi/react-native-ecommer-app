import { Text, View } from "react-native";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../../constants";
import Search from "../../common/search/Search";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>
          Find The Most
        </Text>
        <Text style={styles.welcomeText(COLORS.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>

      <Search />
    </View>
  );
};

export default Welcome;
