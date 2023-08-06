import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  cover: {
    height: 290,
    width: "100%",
    resizeMode: "cover",
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
  },
  profile: {
    width: 155,
    height: 155,
    borderRadius: 999,
    overflow: "hidden",
    resizeMode: "cover",
    marginTop: -155 / 2,
  },
  name: {
    fontFamily: "bold",
    color: COLORS.primary,
    marginVertical: 5,
  },
  loginBtn: {
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    padding: 2,
    borderWidth: 0.4,
    borderColor: COLORS.primary,
    borderRadius: SIZES.xxLarge,
  },
  menuText: (menuItem) => ({
    fontFamily: "regular",
    color: menuItem ? COLORS.white : COLORS.primary,
    fontWeight: "600",
    marginHorizontal: 20,
    fontSize: SIZES.medium,
    lineHeight: SIZES.xLarge,
  }),
  menuWrapper: {
    marginTop: SIZES.xLarge,
    width: SIZES.width - SIZES.large,
  },
  menuItem: (bottomWidth) => ({
    flexDirection: "row",
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
  }),
  cancel: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
  },
});
export default styles;
