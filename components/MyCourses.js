import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import BoxBody from "./BoxBody";

import Colors from "../constants/colors";

const MyCourses = (props) => {
  return (
    <View>
      <BoxBody style={styles.boxBody}>
        <View style={styles.container}>
          <Image style={styles.image} source={props.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{props.title}</Text>
          </View>
        </View>
      </BoxBody>
    </View>
  );
};

const styles = StyleSheet.create({
  boxBody: {
    marginBottom: 20,
    padding: 0
  },
  container:{
    
  },
  image:{
    flex: 1,
    width: '100%',
  },
  title:{
    fontSize: 18,
    fontWeight: '600',
    color: Colors.courseColor_1,
    lineHeight: 32,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
});

export default MyCourses;
