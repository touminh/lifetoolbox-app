import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";



const BoxTitle = (props) => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 16
  },
});

export default BoxTitle;
