import { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import router from "./assets/router";
import { userContext } from "./Screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  const isAuth = useContext(userContext);
  const route = router(isAuth);
  return (
    <NavigationContainer>
      <userContext.Provider value={isAuth}>
        <View style={styles.container}>{route}</View>
      </userContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
