import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import CourseDetailResources from '../../components/CourseDetailResources';

const ResourcesScreen = () => {
  return (
    <ScrollView>
      <CourseDetailResources />
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

export default ResourcesScreen;
