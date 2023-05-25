import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  containerInner: {
    selfAlign: "stretch",
    // maxWidth: "90%",
    // marginHorizontal: "auto",
  },
  containerSoft: {
    marginVertical: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
});
