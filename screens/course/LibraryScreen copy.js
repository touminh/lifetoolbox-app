import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { Form, Item, Picker } from "native-base";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

import Colors from "../../constants/colors";

const win = Dimensions.get("window");
const ratio = win.width / 480; //541 is actual image width

const ExploreScreen = (props) => {
  const [courseOption, setCourseOption] = useState("key0");

  const onValueChange2 = (value) => {
    setCourseOption(value);
  };
  return (
    <View style={styles.container}>
      <View>
        <Form>
          <Item
            picker
            style={{
              borderBottomColor: "#fff",
              justifyContent: "space-between",
              padding: 0,
            }}
          >
            <Picker
              mode="dropdown"
              iosIcon={
                <Icons
                  name="menu-down"
                  style={{ fontSize: 24, color: "#000", marginRight: 16 }}
                />
              }
              style={styles.picker}
              placeholder="Courses"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={courseOption}
              onValueChange={onValueChange2}
            >
              <Picker.Item label="All courses" value="key0" />
              <Picker.Item label="Favorite courses" value="key1" />
              <Picker.Item label="Archived courses" value="key2" />
            </Picker>
            <View style={styles.row}>
              <Icons
                name="magnify"
                style={{ fontSize: 24, color: "#000", marginRight: 16 }}
              />
              <Icons
                name="cart-outline"
                style={{ fontSize: 24, color: "#000" }}
                onPress={() => {
                  props.navigation.navigate("Cart");
                }}
              />
            </View>
          </Item>
        </Form>
      </View>
      <ScrollView style={styles.courseList}>
        <View style={styles.rowMarginBottom}>
          <Image
            style={styles.preview_thumb}
            source={require("../../assets/img-2.jpg")}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>
            Learn Complete Python-3 GUI using Tkinter
            </Text>
            <Text style={styles.smallText}>
              Daniel Walter Scott, Instructor HQ
            </Text>
            <View style={styles.progressContainer}>
              <View style={styles.row}>
                <Text style={styles.percentBarContainer}></Text>
                <Text style={styles.percentNumber}>40% complete</Text>
              </View>
              <Text
                style={{
                  ...styles.percentBar,
                  backgroundColor: Colors.primary,
                  width: 40,
                }}
              >
                {" "}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.rowMarginBottom}>
          <Image
            style={styles.preview_thumb}
            source={require("../../assets/course-4.jpg")}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>
            Python-Introduction to Data Science and Machine learning A-Z
            </Text>
            <Text style={styles.smallText}>
              Daniel Walter Scott, Instructor HQ
            </Text>
            <View style={styles.progressContainer}>
              <View style={styles.row}>
                <Text style={styles.percentBarContainer}></Text>
                <Text style={styles.percentNumber}>70% complete</Text>
              </View>
              <Text
                style={{
                  ...styles.percentBar,
                  backgroundColor: Colors.primary,
                  width: 70,
                }}
              >
                {" "}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.rowMarginBottom}>
          <Image
            style={styles.preview_thumb}
            source={require("../../assets/course-2.jpg")}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>
              User Experience Design Essentials - A Adobe XD UI UX Design
            </Text>
            <Text style={styles.smallText}>
              Daniel Walter Scott, Instructor HQ
            </Text>
            <Text style={styles.startCourse}>START COURSE</Text>
          </View>
        </View>

        <View style={styles.rowMarginBottom}>
          <Image
            style={styles.preview_thumb}
            source={require("../../assets/course-3.jpg")}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>
            Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)
            </Text>
            <Text style={styles.smallText}>
              Daniel Walter Scott, Instructor HQ
            </Text>
            <View style={styles.progressContainer}>
              <View style={styles.row}>
                <Text style={styles.percentBarContainer}></Text>
                <Text style={styles.percentNumber}>100% complete</Text>
              </View>
              <Text
                style={{
                  ...styles.percentBar,
                  backgroundColor: Colors.primary,
                  width: 100,
                }}
              >
                {" "}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 14,
  },
  row: {
    flexDirection: "row",
  },
  rowMarginBottom: {
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 8,
  },
  picker: {
    padding: 0,
    marginLeft: -20,
  },
  courseList:{
    marginTop: 10,
    marginBottom: 10,
  },
  preview_thumb: {
    width: 64,
    height: 74 * ratio, //362 is actual height of image
    borderRadius: 4,
    marginRight: 16,
  },
  infoContainer: {
    width: "76%",
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
  },
  smallText: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
  },
  progressContainer: {
    marginLeft: 2,
  },
  percentBarContainer: {
    borderRadius: 5,
    height: 10,
    width: 100,
    display: "flex",
    overflow: "hidden",
    lineHeight: 0,
    backgroundColor: "#e9ecef",
    marginTop: 8,
  },
  percentBar: {
    borderRadius: 5,
    height: 10,
    width: 55,
    display: "flex",
    overflow: "hidden",
    lineHeight: 0,
    backgroundColor: Colors.primary,
    marginTop: -10,
  },
  percentNumber: {
    position: "absolute",
    top: 4,
    left: 112,
    color: "#333",
  },
  startCourse:{
    marginTop: 6,
    fontWeight: '600',
    fontSize: 13,
    color: Colors.primary,
  }
});
export default ExploreScreen;
