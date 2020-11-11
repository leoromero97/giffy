import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import screens from "./src/constants/screens";
import Home from "./src/screens/home/home";
import SearchScreen from "./src/screens/search/searchScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#5a5a5a",
          headerStyle: { backgroundColor: "#121212" },
        }}
      >
        <Stack.Screen
          name={screens.home}
          component={Home}
          options={{
            headerTitleStyle: {
              alignSelf: "center",
              fontSize: 32,
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name={screens.search}
          component={SearchScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
