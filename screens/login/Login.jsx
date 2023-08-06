import { Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackBtn from "../../components/common/search/backBtn/BackBtn";
import styles from "./style";
import Button from "../../components/common/search/backBtn/Button";

const Login = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  return (
    <ScrollView>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <View>
          <BackBtn onPress={() => navigation.goBack()} />
          <Image
            source={require("../../assets/images/bk.png")}
            style={styles.cover}
          />

          <Text style={styles.title}>Unlimited Luxurious Furniture</Text>

          <Button title="LOGIN" onPress={() => {}} login={true} />
          <Button title="REGISTER" onPress={() => {}} login={false} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
