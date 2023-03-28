import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./src/userContext";
import Router from "./src/router";

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <View style={styles.container}>
          <Router />
        </View>
      </UserProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
