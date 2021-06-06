import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Content,
  Accordion,
  Text,
  View,
  Right,
} from "native-base";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const dataArray = [
  {
    title: "Introduction to this Course",
    total: "22:08",
    lectures: 8,
    content: [
      {
        type: "video",
        title: "A Note On Asking For Help",
        total: "00:12",
      },
      {
        'type': 'video',
        'title': 'Introducing Our TA',
        total: "01:42",
      },
      {
        'type': 'video',
        'title': 'Join the Online Community',
        total: "00:51",
      },
      {
        'type': 'video',
        'title': 'Why This Course?',
        total: "07:48",
      },
      {
        'type': 'video',
        'title': 'Syllabus Download',
        total: "01:42",
      },
      {
        'type': 'video',
        'title': 'Lecture Slides',
        total: "00:11",
      }
    ],
  },
  { title: "Introduction to Front End Development", total: "43:26", lectures: 12, content: [ { type: "video", title: "A Note On Asking For Help", total: "00:12", }, { 'type': 'video', 'title': 'Introducing Our TA', total: "01:42", }, { 'type': 'video', 'title': 'Join the Online Community', total: "00:51", }, { 'type': 'video', 'title': 'Why This Course?', total: "07:48", }, { 'type': 'video', 'title': 'Syllabus Download', total: "01:42", }, { 'type': 'video', 'title': 'Lecture Slides', total: "00:11", } ], },
  { title: "Introduction to HTML", total: "01:15:25", lectures: 18, content: [ { type: "video", title: "A Note On Asking For Help", total: "00:12", }, { 'type': 'video', 'title': 'Introducing Our TA', total: "01:42", }, { 'type': 'video', 'title': 'Join the Online Community', total: "00:51", }, { 'type': 'video', 'title': 'Why This Course?', total: "07:48", }, { 'type': 'video', 'title': 'Syllabus Download', total: "01:42", }, { 'type': 'video', 'title': 'Lecture Slides', total: "00:11", } ], },
  { title: "Intermediate HTML", total: "52:28", lectures: 12, content: [ { type: "video", title: "A Note On Asking For Help", total: "00:12", }, { 'type': 'video', 'title': 'Introducing Our TA', total: "01:42", }, { 'type': 'video', 'title': 'Join the Online Community', total: "00:51", }, { 'type': 'video', 'title': 'Why This Course?', total: "07:48", }, { 'type': 'video', 'title': 'Syllabus Download', total: "01:42", }, { 'type': 'video', 'title': 'Lecture Slides', total: "00:11", } ], },
  { title: "Introduction to CSS", total: "12:08", lectures: 2, content: [ { type: "video", title: "A Note On Asking For Help", total: "00:12", }, { 'type': 'video', 'title': 'Introducing Our TA', total: "01:42", }, { 'type': 'video', 'title': 'Join the Online Community', total: "00:51", }, { 'type': 'video', 'title': 'Why This Course?', total: "07:48", }, { 'type': 'video', 'title': 'Syllabus Download', total: "01:42", }, { 'type': 'video', 'title': 'Lecture Slides', total: "00:11", } ], },
  { title: "Intermediate CSS", total: "02:03:58", lectures: 23, content: [ { type: "video", title: "A Note On Asking For Help", total: "00:12", }, { 'type': 'video', 'title': 'Introducing Our TA', total: "01:42", }, { 'type': 'video', 'title': 'Join the Online Community', total: "00:51", }, { 'type': 'video', 'title': 'Why This Course?', total: "07:48", }, { 'type': 'video', 'title': 'Syllabus Download', total: "01:42", }, { 'type': 'video', 'title': 'Lecture Slides', total: "00:11", } ], },
  { title: "Introduction to JavaScript", total: "37:08", lectures: 6, content: [ { type: "video", title: "A Note On Asking For Help", total: "00:12", }, { 'type': 'video', 'title': 'Introducing Our TA', total: "01:42", }, { 'type': 'video', 'title': 'Join the Online Community', total: "00:51", }, { 'type': 'video', 'title': 'Why This Course?', total: "07:48", }, { 'type': 'video', 'title': 'Syllabus Download', total: "01:42", }, { 'type': 'video', 'title': 'Lecture Slides', total: "00:11", } ], },

  
  /*
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },*/
];

const _renderHeader = (item, expanded) => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        marginTop: 4,
      }}
    >
      <Text style={{ fontWeight: "600", width: '80%' }}> {item.title}</Text>
      <Text style={{ fontWeight: "600" }}> {item.total}</Text>
    </View>
  );
};

const _renderContent = (item) => {
  return (
    <View>
      {item["content"].map((item) => (
        <TouchableOpacity>
        <View style={styles.subList}>
          <Icon name="play-circle-outline" style={styles.listType} />
          <Text style={styles.listTitle}>{item.title}</Text>
          <Text style={styles.listTotal}>{item.total}</Text>
        </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const CourseDetailCoursesContent = (props) => {
  return (
    <View>
      <Text style={styles.textHead1}>Course content</Text>
      <View style={styles.rowReverse}>
        <Text>47:06:29</Text>
        <Text style={{ marginRight: 14 }}> 402 lectures</Text>
      </View>
      <View>
        <Accordion
          dataArray={dataArray}
          animation={true}
          expanded={true}
          renderHeader={_renderHeader}
          renderContent={_renderContent}
          style={{ borderWidth: 0, marginTop: 6 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowReverse: {
    flexDirection: "row-reverse",
    marginBottom: 4,
  },
  textHead1: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: "600",
  },
  textHead3: {
    fontSize: 16,
    marginBottom: 16,
    fontWeight: "600",
  },
  subList:{
    flexDirection: "row",
    padding: 8,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: '#f7f7f7',
  },
  listType: {
    width: '10%',
    fontSize: 18,
    color: '#111',
  },
  listTitle: {
    width: '70%',
    color: '#111',
    fontSize: 14
  },
  listTotal: {
    width: '20%',
    textAlign: 'right',
    color: '#111',
    fontSize: 14
  },
});

export default CourseDetailCoursesContent;
