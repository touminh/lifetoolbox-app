import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CourseDetailResources = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.title}>Lecture 9 - UI Library</Text>
        <Text style={styles.resources}>3 resources</Text>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.title}>Lecture 12 - Section Overview</Text>
        <Text style={styles.resources}>16 resources</Text>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.title}>Lecture 14 - Enviroment Setup for Mac</Text>
        <Text style={styles.resources}>4 resources</Text>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.title}>Lecture 15 - Single Page Application</Text>
        <Text style={styles.resources}>1 resource</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 14, paddingTop: 20, backgroundColor: "#fff" },
  listContainer:{
    marginBottom: 10
  },
  title:{
    fontSize: 16,
    lineHeight: 24
  },
  resources:{
    fontSize: 13,
    marginTop: 2,
  }
});

export default CourseDetailResources;
