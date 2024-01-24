import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screen/LoginScreen";
import SuccessScreen from "../screen/SuccessScreen";

const Stack = createNativeStackNavigator();

const NavStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{ title: "Success" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavStack;
