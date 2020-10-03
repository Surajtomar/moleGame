import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import Square from "../components/Square";
import { SET_IS_GAME_OVER, SET_SCORE } from "../context/action.type";
import { GameContext } from "../context/context";

const GameBoard = (props) => {
  const { state, dispatch } = useContext(GameContext);
  const [timeLeft, setTimeLeft] = useState(state.gameTime);

  useEffect(() => {
    if (timeLeft == 0) {
      dispatch({ type: SET_IS_GAME_OVER, payload: true });
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/background.png")}
    >
      <View style={styles.gameStatsContainer}>
        <Text style={styles.gameStatsText}>Time Left : {timeLeft}</Text>

        <Text style={styles.gameStatsText}>Score : {state.score}</Text>

        <Text style={styles.gameStatsText}>Level : {state.level}</Text>
      </View>
      {state.isGameOver ? (
        <View>
          <Text style={styles.gameOverText}> Game Over</Text>
          <Button
            title="Start Again"
            onPress={() => {
              dispatch({ type: SET_IS_GAME_OVER, payload: false });
              dispatch({ type: SET_SCORE, payload: 0 });
            }}
          />
        </View>
      ) : (
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
      )}
    </ImageBackground>
  );
};

export default GameBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  game: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    width: 300,
    marginTop: 150,
  },
  gameOverText: {
    fontSize: 40,
    margin: 30,
    color: "red",
    fontWeight: "bold",
    marginTop: 150,
  },
  gameStatsContainer: {
    margin: 10,
    flexDirection: "row",
  },
  gameStatsText: {
    margin: 10,
    fontSize: 18,
  },
});
