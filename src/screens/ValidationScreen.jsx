import { View } from "react-native";
import { styles } from "../utils/styles";
import { ActivityIndicator } from "react-native-paper";
import { useState } from "react";

export default function ValidationScreen({ navigation }) {
  useState(() => {
    setTimeout(() => {
      navigation.navigate("LoginScreen");
    }, 200);
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} color="#00f0ff" size="large" />
    </View>
  );
}
