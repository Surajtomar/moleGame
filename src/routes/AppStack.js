import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import GameBoard from "../screens/GameBoard";
import Level from "../screens/Level";

const Stack = createStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="GameBoard" component={GameBoard} />
      <Stack.Screen name="Level" component={Level} />
    </Stack.Navigator>
  );
};

export default AppStack;
