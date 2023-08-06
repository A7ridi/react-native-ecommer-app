import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../../../constants";

const Button = ({ onPress, title, login }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyle(login)}>
      <Text style={styles.btnText(login)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnText: (login) => ({
    fontFamily: "bold",
    color: login ? "white" : COLORS.primary,
    fontSize: 18,
  }),
  btnStyle: (login) => ({
    height: 50,
    width: "100%",
    marginTop: login ? 20 : 10,
    backgroundColor: login ? COLORS.primary : "",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: login ? 0 : 2,
    borderColor: login ? "" : COLORS.primary,
  }),
});
