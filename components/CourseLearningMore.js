import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../constants/colors";

const CourseLearningMore = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <Icon name="dots-horizontal" style={styles.icon} />
          <TouchableOpacity>
            <Text
              style={styles.title}
              onPress={() => {
                props.nav.navigate("AboutThisCourse");
              }}
            >
              About this Course
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <Icon name="export-variant" style={styles.icon} />
          <TouchableOpacity>
            <Text style={styles.title}>Share this Course</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <Icon name="forum" style={styles.icon} />
          <Text style={styles.title}>Q&A</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <Icon name="notebook-multiple" style={styles.icon} />
          <Text style={styles.title}>Notes</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <Icon name="format-list-bulleted" style={styles.icon} />
          <TouchableOpacity>
            <Text
              style={styles.title}
              onPress={() => {
                props.nav.navigate("Resources");
              }}
            >
              Resources
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <Icon name="bell-outline" style={styles.icon} />
          <TouchableOpacity>
            <Text
              style={styles.title}
              onPress={() => {
                props.nav.navigate("CourseDetailAnnouncements");
              }}
            >
              Announcements
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <Icon name="star-outline" style={styles.icon} />
          <Text style={styles.title}>Remove course from favorites</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <Icon name="briefcase-download-outline" style={styles.icon} />
          <Text style={styles.title}>Archive this course</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: "row" },
  rowContainer: {
    marginTop: 6,
    marginBottom: 6,
  },
  container: {
    padding: 14,
    paddingTop: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 16,
    color: "#333",
  },
  icon: {
    color: "#333",
    fontSize: 20,
    marginTop: 0,
    width: 40,
  },
});

export default CourseLearningMore;
