import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 240,
    marginEnd: 22,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
  },
  imageContainer: {
    flex: 1,
    // width: 174,
    // marginLeft: SIZES.small / 2,
    // marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
  },
  productImage: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  cardDetails: {
    padding: SIZES.small,
  },
  title: {
    fontFamily: "medium",
    fontSize: SIZES.medium,
    marginBottom: 2,
  },
  tsupplieritle: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  price: {
    fontFamily: "medium",
    fontSize: SIZES.medium,
  },
  addCartBtn: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
  productRowContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
