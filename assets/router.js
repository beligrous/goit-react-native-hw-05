import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/Main/HomeScreen";
import CreatePostsScreen from "../Screens/Main/CreatePostsScreen";
import ProfileScreen from "../Screens/Main/ProfileScreen";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "../Screens/RegistrationScreen/RegistrationScreen";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const router = (isAuth) => {
  const authpath = (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Registration"
        options={{ headerShown: false }}
        component={RegistrationScreen}
      />
    </Stack.Navigator>
  );

  const homepath = (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
          headerTitleAlign: "center",
          headerLeft: ({ color }) => (
            <Ionicons name="arrow-back" size={28} color={color} />
          ),
          headerRight: ({ color }) => (
            <MaterialIcons name="logout" size={24} color={color} />
          ),
        }}
        name="Публікації"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="plus" size={size} color={color} />
          ),
          headerTitleAlign: "center",
        }}
        name="Створити публікацію"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
          headerShown: false,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );

  if (!isAuth) {
    return authpath;
  }
  return homepath;
};

export default router;
