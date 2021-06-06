import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "native-base";

import { Colors } from "react-native/Libraries/NewAppScreen";

const CourseLeaningVideoPlayer = (props) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/12.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paddingLeftRight20: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  imageContainer: {
    height: 220,
  },
  image: {
    flex: 1,
    width: "100%",
  },
});

export default CourseLeaningVideoPlayer;
