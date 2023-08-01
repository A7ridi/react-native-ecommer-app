import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

const styles = StyleSheet.create({
  productListLoadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginTop: SIZES.xxxLarge * 3,
  },
  searchImage: {
    resizeMode: "contain",
    width: SIZES.width - 80,
    height: SIZES.height - 300,
    opacity: 0.9,
  },
  searchText: {
    textAlign: "center",
  },
  productListContainer: {
    alignItems: "flex-start",
    paddingLeft: SIZES.small / 2,
    gap: 10,
  },
});

export default styles;
