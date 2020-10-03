import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Start Game"
        onPress={() => navigation.navigate("GameBoard")}
      />
      <Text></Text>

      <Button title="Level" onPress={() => navigation.navigate("Level")} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
