import React from "react";
import { View, Text, StyleSheet } from "react-native";

import BoxBody from "./BoxBody";

import Colors from "../constants/colors";

const CurrentRunningCourses = (props) => {
  return (
    <View>
      <BoxBody style={styles.boxBody}>
        <View style={{...styles.headContainer, backgroundColor: props.color}}>
          <Text style={styles.headTitle}>{props.category}</Text>
        </View>
        <View>
          <Text style={styles.courseTitle}>
            {props.title}
          </Text>
        </View>
        <View style={styles.info}>
          <View style={styles.teachContainer}>
            <Text style={styles.teacherTitle}>Author</Text>
            <Text style={styles.teacherName}>{props.teacher}</Text>
          </View>
          <View style={styles.progressContainer}>
            <Text style={styles.percentNumber}>{props.percent}%</Text>
            <Text style={styles.percentBarContainer}>
              
            </Text>
            <Text style={{...styles.percentBar, backgroundColor: props.color, width: props.percent}}> </Text>
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
  headContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 3,
  },
  headTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 36,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 28,
    marginTop: 10,
    color: Colors.courseColor_1,
  },
  info:{
    marginTop: 24,
    flexDirection: "row",
    justifyContent: 'space-between',
  },

  teacherTitle:{
    fontSize: 14,
    color: "#7e8299",
  },
  teacherName:{
    fontSize: 14,
    color: Colors.courseColor_1,
    marginTop: 4,
  },
  percentBarContainer:{
    borderRadius: 5,
    height: 10,
    width: 100,
    display: 'flex',
    overflow: 'hidden',
    lineHeight: 0,
    backgroundColor: '#e9ecef',
    marginTop: 8,
  },
  percentBar:{
    borderRadius: 5,
    height: 10,
    width: 55,
    display: 'flex',
    overflow: 'hidden',
    lineHeight: 0,
    backgroundColor: Colors.primary,
    marginTop: -10
  }
});

export default CurrentRunningCourses;
