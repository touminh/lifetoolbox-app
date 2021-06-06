import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Content, Tab, Tabs, Text, View } from "native-base";

import CourseDetailAbout from './CourseDetailAbout';
import CourseDetailCoursesContent from './CourseDetailCoursesContent';
import CourseDetailReview from './CourseDetailReview';

const CourseDetailTab = (props) => {
  return (
    <View style={styles.container}>
      <Tabs
        tabBarUnderlineStyle={{ height: 2, backgroundColor: "#0052cc" }}
        tabBarInactiveTextColor="#555"
        tabBarActiveTextColor="#0052cc"
      >
        <Tab
          heading="About"
          tabStyle={{ backgroundColor: "#fff"}}
          activeTabStyle={{ backgroundColor: "#fff" }}
        >
          <View style={styles.contentContainer}>
            <CourseDetailAbout />
          </View>
        </Tab>
        <Tab
          heading="Courses"
          tabStyle={{ backgroundColor: "#fff" }}
          activeTabStyle={{ backgroundColor: "#fff" }}
        >
          <View style={styles.contentContainer}>
            <CourseDetailCoursesContent />
          </View>
        </Tab>
        <Tab
          heading="Reviews"
          tabStyle={{ backgroundColor: "#fff" }}
          activeTabStyle={{ backgroundColor: "#fff" }}
        >
          <View style={styles.contentContainer}>
            <CourseDetailReview />
          </View>
        </Tab>
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    padding: 14,
    paddingTop: 20,
    paddingRight: 20,
    backgroundColor: "#f7f7f7",
  },
});

export default CourseDetailTab;
