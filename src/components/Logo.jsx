import { Image, View } from "react-native";
import { Text } from "react-native-paper";

export default function Logo() {
  return (
    <View>
      <Image
        source={require("/assets/logo.png")}
        style={{ width: 200, height: 200, marginHorizontal: "auto" }}
        resizeMode="contain"
      />
      <Text
        variant="headlineLarge"
        style={{ textAlign: "center", color: "#432080" }}
      >
        Adotinho
      </Text>
    </View>
  );
}
