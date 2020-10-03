import React, { useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/routes/AppStack";

// Context and reducer
import { GameContext } from "./src/context/context";
import reducer from "./src/context/reducer";

// first state to provide in react reducer
const initialState = {
  score: 0,
  gameTime: 60,
  level: 1,
  isGameOver: false,
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </GameContext.Provider>
  );
}
