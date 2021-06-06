import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import BoxBody from "./BoxBody";

import Colors from "../constants/colors";

const HomeWelcome = (props) => {
  console.log(props.user);
  return (
    <View>
      <BoxBody style={styles.boxBody}>
        <Text style={styles.welcomeHead}>Welcome Sokeng!</Text>
        <Text style={styles.welcomeText}>
          Education is the passport to the future, So learn more & more
        </Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/custom-15.png")}
          />
        </View>
      </BoxBody>
    </View>
  );
};

const styles = StyleSheet.create({
  boxBody: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    marginBottom: 10
  },
  welcomeHead: {
    fontSize: 40,
    color: Colors.white,
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 18,
    color: Colors.white,
    marginBottom: 8,
  },
  imageContainer:{
    marginRight: -20,
    marginBottom: -20,
  },
  image: {
    maxWidth: "100%",
    height: 120,
  },
});

export default HomeWelcome;
