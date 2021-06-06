import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import CourseDetailAbout from '../../components/CourseDetailAbout';

const AboutThisCourseScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <CourseDetailAbout />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  
});

export default AboutThisCourseScreen;
