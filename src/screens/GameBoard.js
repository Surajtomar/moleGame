import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Square from "../components/Square";
import { UPDATE_TIME_LEFT } from "../context/action.type";
import { GameContext } from "../context/context";

const GameBoard = (props) => {
  const { state, dispatch } = useContext(GameContext);

  const [timeLeft, setTimeLeft] = useState(state.gameTime);

  useEffect(() => {
    if (!timeLeft) return;
    const timerId = setInterval(() => {
      //happens every 1000ms
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/background.png")}
    >
      <Text> Mole Game</Text>
      <Text>Time Left : {timeLeft}</Text>
      <Text>Score : {state.score}</Text>
      <Text>Level : {state.level}</Text>

      <View style={styles.game}>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </View>
    </ImageBackground>
  );
};

export default GameBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  game: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    paddingTop: 20,
    width: 300,
  },
});
