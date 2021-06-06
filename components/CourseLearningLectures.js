import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../constants/colors";

const CourseLearningLectures = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          Section 1 - Master Project: State Normalization
        </Text>
        <View>
          <View style={styles.row}>
            <View>
              <View style={styles.videoNumber}>
                <Text style={styles.videoNumberText}>1</Text>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.row}>
              <Icon name="check-circle" style={styles.iconPlayed} />
                <Text style={styles.title}>Data Normalization + Collection...</Text>
              </View>
              <View style={styles.rowMarginTop4}>
              <Icon name="closed-caption" style={styles.iconCaption} />
                <Text style={styles.subInfo}>Video - 09:26 mins - Recources(1)</Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.row}>
            <View>
              <View style={styles.videoNumber}>
                <Text style={styles.videoNumberText}>2</Text>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.row}>
                <Text style={styles.title}>Data Normalization + Collection...</Text>
              </View>
              <View style={styles.rowMarginTop4}>
              <Icon name="closed-caption" style={styles.iconCaption} />
                <Text style={styles.subInfo}>Video - 09:26 mins - Recources(1)</Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.row}>
            <View>
              <View style={styles.videoNumber}>
                <Text style={styles.videoNumberText}>3</Text>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.row}>
              <Icon name="check-circle" style={styles.iconPlayed} />
                <Text style={styles.title}>Data Normalization + Collection...</Text>
              </View>
              <View style={styles.rowMarginTop4}>
              <Icon name="closed-caption" style={styles.iconCaption} />
                <Text style={styles.subInfo}>Video - 09:26 mins - Recources(1)</Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.row}>
            <View>
              <View style={styles.videoNumber}>
                <Text style={styles.videoNumberText}>4</Text>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.row}>
              <Icon name="check-circle" style={styles.iconPlayed} />
                <Text style={styles.title}>Data Normalization + Collection...</Text>
              </View>
              <View style={styles.rowMarginTop4}>
              <Icon name="closed-caption" style={styles.iconCaption} />
                <Text style={styles.subInfo}>Video - 09:26 mins - Recources(1)</Text>
              </View>
            </View>
          </View>
        </View>
      </View>


      <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>
        Section 2 - Master Project: State Normalization
      </Text>
      <View>
        <View style={styles.row}>
          <View>
            <View style={styles.videoNumber}>
              <Text style={styles.videoNumberText}>5</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.row}>
            <Icon name="check-circle" style={styles.iconPlayed} />
              <Text style={styles.title}>Data Normalization + Collection...</Text>
            </View>
            <View style={styles.rowMarginTop4}>
            <Icon name="closed-caption" style={styles.iconCaption} />
              <Text style={styles.subInfo}>Video - 09:26 mins - Recources(1)</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.row}>
          <View>
            <View style={styles.videoNumber}>
              <Text style={styles.videoNumberText}>6</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.row}>
              <Text style={styles.title}>Data Normalization + Collection...</Text>
            </View>
            <View style={styles.rowMarginTop4}>
            <Icon name="closed-caption" style={styles.iconCaption} />
              <Text style={styles.subInfo}>Video - 09:26 mins - Recources(1)</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.row}>
          <View>
            <View style={styles.videoNumber}>
              <Text style={styles.videoNumberText}>7</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.row}>
              <Text style={styles.title}>Data Normalization + Collection...</Text>
            </View>
            <View style={styles.rowMarginTop4}>
            <Icon name="closed-caption" style={styles.iconCaption} />
              <Text style={styles.subInfo}>Video - 09:26 mins - Recources(1)</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.row}>
          <View>
            <View style={styles.videoNumber}>
              <Text style={styles.videoNumberText}>8</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.row}>
              <Text style={styles.title}>Data Normalization + Collection...</Text>
            </View>
            <View style={styles.rowMarginTop4}>
            <Icon name="closed-caption" style={styles.iconCaption} />
              <Text style={styles.subInfo}>Video - 09:26 mins - Recources(1)</Text>
            </View>
          </View>
        </View>
      </View>
    </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: "row" },
  container: {
    padding: 14,
    paddingTop: 20,
    paddingRight: 20,
  },
  rowContainer: {
    marginBottom: 8,
  },
  rowMarginTop4:{
    flexDirection: "row",
    marginTop: 4
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
  },
  videoNumber: {
    width: 40,
    marginRight: 4,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  videoNumberText:{
    fontSize: 16
  },
  title: {
      fontSize: 16
  },
  iconPlayed:{
    color: Colors.primary,
    fontSize: 16,
    marginTop: 1,
    width: 24,
  },
  iconCaption:{
    color: '#666',
    fontSize: 20,
    marginTop: -2,
    width: 24,
  },
  subInfo:{
      color: '#333'
  }
});

export default CourseLearningLectures;
