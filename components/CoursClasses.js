import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import BoxBody from "./BoxBody";

import Colors from "../constants/colors";

const CoursClasses = (props) => {
  return (
    <View>
      <BoxBody style={styles.boxBody}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={props.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.learnMore}>Learn more</Text>
          </View>
        </View>
      </BoxBody>
    </View>
  );
};

const styles = StyleSheet.create({
  boxBody: {
    marginBottom: 20,
  },
  container:{
    flexDirection: "row",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  image:{
    maxWidth: 80,
    height: 80,
  },
  textContainer:{
    /*
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    */
  },
  title:{
    fontSize: 16,
    color: Colors.courseColor_1,
    lineHeight: 32,
    marginTop: 10
  },
  learnMore:{
    color: Colors.courseColorLearnMore,
  }
});

export default CoursClasses;
