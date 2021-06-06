import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { Tab, Tabs, Text, View } from "native-base";

import CourseLearningLectures from './CourseLearningLectures';
import CourseLearningMore from './CourseLearningMore';

import { Colors } from "react-native/Libraries/NewAppScreen";

const CourseLeaningInfo = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headTitle}>
          Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)
        </Text>
        <Text style={styles.headTeacher}>Andrei Neagoie, Yihua Zhang</Text>
      </View>
      <View>
        <Tabs
          tabBarUnderlineStyle={{ height: 2, backgroundColor: "#0052cc" }}
          tabBarInactiveTextColor="#555"
          tabBarActiveTextColor="#0052cc"
        >
          <Tab
            heading="Lectures"
            tabStyle={{ backgroundColor: "#fff" }}
            activeTabStyle={{ backgroundColor: "#fff" }}
          >
            <View style={styles.contentContainer}>
              <CourseLearningLectures />
            </View>
          </Tab>
          <Tab
            heading="More"
            tabStyle={{ backgroundColor: "#fff" }}
            activeTabStyle={{ backgroundColor: "#fff" }}
          >
            <View style={styles.contentContainer}>
              <CourseLearningMore nav={props.nav}/>
            </View>
          </Tab>
         
        </Tabs>
      </View>
      <View style={styles.separate}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  separate:{
    height: 30,
},
container:{
  padding: 14,
  paddingTop: 4,
  paddingBottom: 8,
  paddingRight: 20,
},
  paddingLeftRight20: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  headTitle: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 6,
  },
  headTeacher: {
    fontSize: 14,
    color: "#555555",
  },
});

export default CourseLeaningInfo;
