import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { DateObject } from "react-native-calendars";

const image = { uri: "https://reactjs.org/logo-og.png" };

const Home = ({ text}:IHome) => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}></ImageBackground>
      <Text style={styles.text}>{text}</Text>
      {/* {console.log("OJO na re o:", date)} */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

export default Home;


interface IHome{
  text:string,
  // date:DateObject
}