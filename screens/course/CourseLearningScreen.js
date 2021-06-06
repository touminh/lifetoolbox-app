import * as React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

import CourseLeaningVideoPlayer from "../../components/CourseLeaningVideoPlayer";
import CourseLeaningInfo from "../../components/CourseLeaningInfo";

import Colors from "../../constants/colors";

const CourseLearningScreen = ({ navigation }) => {
  return (
    <View>
      <CourseLeaningVideoPlayer />
      <ScrollView style={styles.container}>
        <CourseLeaningInfo nav={navigation}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});

export default CourseLearningScreen;
