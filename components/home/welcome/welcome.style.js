import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeText: (color, top) => ({
    fontFamily: "bold",
    fontSize: SIZES.xxLarge - 5,
    marginTop: top,
    color,
    marginHorizontal: 12,
    paddingLeft: 10,
  }),
});

export default styles;
