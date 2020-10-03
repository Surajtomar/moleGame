import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SET_LEVEL } from "../context/action.type";
import { GameContext } from "../context/context";

const Level = () => {
  const { state, dispatch } = useContext(GameContext);

  return (
    <View>
      <Text>Level: {state.level}</Text>
      <Button
        title="1"
        onPress={() => dispatch({ type: SET_LEVEL, payload: 1 })}
      />
      <Button
        title="2"
        onPress={() => dispatch({ type: SET_LEVEL, payload: 2 })}
      />
      <Button
        title="3"
        onPress={() => dispatch({ type: SET_LEVEL, payload: 3 })}
      />
      <Text>SSS</Text>
    </View>
  );
};

export default Level;

const styles = StyleSheet.create({});
