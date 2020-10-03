import React, { useContext } from "react";
import { Button, StyleSheet, Text, View, ImageBackground } from "react-native";
import { SET_LEVEL } from "../context/action.type";
import { GameContext } from "../context/context";

const Level = () => {
  const { state, dispatch } = useContext(GameContext);

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/background.png")}
    >
      <View style={styles.button}>
        <Text style={styles.text}>Level: {state.level}</Text>
        <Button
          title="1"
          onPress={() => dispatch({ type: SET_LEVEL, payload: 1 })}
          color="#74B9FF"
        />
      </View>
      <View style={styles.button}>
        <Button
          title="2"
          onPress={() => dispatch({ type: SET_LEVEL, payload: 2 })}
          color="#74B9FF"
        />
      </View>
      <View style={styles.button}>
        <Button
          title="3"
          onPress={() => dispatch({ type: SET_LEVEL, payload: 3 })}
          color="#74B9FF"
        />
      </View>
    </ImageBackground>
  );
};

export default Level;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 150,
    margin: 10,
  },
  text: {
    margin: 20,
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
