import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xxxLarge,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  cartRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width,
    display: "flex",
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 44,
    top: 20,
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 10,
    top: 5,
  },
  rating: (counter) => ({
    top: SIZES.large,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.large,
    gap: counter ? 8 : 0,
  }),
  ratingText: {
    color: COLORS.gray,
    fontFamily: "medium",
  },
  title: {
    fontFamily: "semibold",
    fontSize: SIZES.large,
  },
  price: {
    paddingHorizontal: 10,
    fontFamily: "semibold",
    fontSize: SIZES.large,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
  },
  descriptionWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large,
  },
  description: {
    fontFamily: "medium",
    fontSize: SIZES.large - 2,
  },
  descText: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    textAlign: "justify",
    marginBottom: SIZES.small,
  },
  locationContainer: {
    marginBottom: SIZES.small,
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    marginHorizontal: 12,
    padding: 5,
    borderRadius: SIZES.large,
  },
  locationIcon: {
    flexDirection: "row",
  },
  cartBtn: {
    width: SIZES.width * 0.7,
    backgroundColor: COLORS.black,
    padding: SIZES.small / 2,
    borderRadius: SIZES.large,
    marginLeft: 12,
    alignItems: "center",
  },
  cartTitle: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
  },
  addCart: {
    width: 37,
    height: 37,
    borderRadius: 50,
    margin: SIZES.small,
    backgroundColor: COLORS.black,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
