import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./newArrival.style";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import ProductLists from "../../components/products/ProductLists";

const NewArrivals = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>

          <Text style={styles.heading}> Products </Text>
        </View>

        <ProductLists />
      </View>
    </SafeAreaView>
  );
};

export default NewArrivals;
