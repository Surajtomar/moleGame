import React, { useContext } from "react";
import { Button, StyleSheet, Text, View, ImageBackground } from "react-native";
import {
  SET_IS_GAME_OVER,
  SET_SCORE,
  UPDATE_SCORE,
} from "../context/action.type";
import { GameContext } from "../context/context";

const Home = ({ navigation }) => {
  const { state, dispatch } = useContext(GameContext);

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/background.png")}
    >
      <View style={styles.button}>
        <Button
          title="Start Game"
          onPress={() => {
            dispatch({ type: SET_IS_GAME_OVER, payload: false });
            dispatch({ type: SET_SCORE, payload: 0 });
            navigation.navigate("GameBoard");
          }}
          color="#74B9FF"
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Level"
          onPress={() => navigation.navigate("Level")}
          color="#74B9FF"
        />
      </View>
    </ImageBackground>
  );
};

export default Home;

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
});
