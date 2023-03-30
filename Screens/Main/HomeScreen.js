import { Text, View, StyleSheet } from "react-native";
import PostsScreen from "./PostsScreen";

const HomeScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <PostsScreen route={route} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
