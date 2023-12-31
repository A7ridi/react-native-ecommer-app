import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const SearchTiles = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("ProductDetails", { item })}
    >
      <View style={styles.image}>
        <Image source={{ uri: item.imageUrl }} style={styles.productImg} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.productTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.supplier}>{item.supplier}</Text>
        <Text style={styles.supplier}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchTiles;
