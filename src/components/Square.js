import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { UPDATE_SCORE } from "../context/action.type";
import { GameContext } from "../context/context";

const Square = () => {
  const { state, dispatch } = useContext(GameContext);

  const [moleActive, setMoleActive] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const timeAfterMoleCome = (Math.random() * (10 - 2) + 2) * 1000;
  const timeAfterMoleGo = (Math.random() * 1.5 + (4 - state.level)) * 1000;

  let timerId;

  useEffect(() => {
    timerId = setInterval(() => {
      setMoleActive(true);
      setTimeout(() => {
        setMoleActive(false);
      }, timeAfterMoleGo);
    }, timeAfterMoleCome);
    setTimeout(endGame, state.gameTime * 1000);
  }, []);

  function endGame() {
    setIsGameOver(true);
    clearInterval(timerId);
  }

  function addScore() {
    dispatch({ type: UPDATE_SCORE });
    setMoleActive(false);
  }

  return (
    <TouchableOpacity onPress={moleActive ? addScore : null}>
      {isGameOver ? (
        <>
          <Image
            source={require("../../assets/hole.png")}
            style={moleActive ? styles.mole : styles.square}
          />
          <Text>X </Text>
        </>
      ) : (
        <Image
          source={
            moleActive
              ? require("../../assets/mole.png")
              : require("../../assets/hole.png")
          }
          style={moleActive ? styles.mole : styles.square}
        />
      )}
    </TouchableOpacity>
  );
};

export default Square;

const styles = StyleSheet.create({
  square: {
    flex: 1,
    minWidth: 80,
    minHeight: 80,
    margin: 10,
    backgroundColor: "#9BF89C",
    width: "100%",
  },
  mole: {
    flex: 1,
    minWidth: 80,
    minHeight: 80,
    margin: 10,
    backgroundColor: "#9BF89C",
    width: "100%",
  },
});
