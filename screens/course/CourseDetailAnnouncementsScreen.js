import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import CourseDetailAnnouncements from '../../components/CourseDetailAnnouncements';

const CourseDetailAnnouncementsScreen = () => {
  return (
    <ScrollView>
      <CourseDetailAnnouncements />
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

export default CourseDetailAnnouncementsScreen;
