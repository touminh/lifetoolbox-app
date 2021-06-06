import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import CourseDetailHead from "../../components/CourseDetailHead";
import CourseDetailData from '../../components/CourseDetailData';
import CourseDetailTab from "../../components/CourseDetailTab";

const CourseDetailScreen = () => {
  return (
    <ScrollView>
      <CourseDetailHead />
      <CourseDetailData />
      <CourseDetailTab />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default CourseDetailScreen;
