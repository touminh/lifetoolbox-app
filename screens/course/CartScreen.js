import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { Button } from "native-base";

import Colors from "../../constants/colors";

const win = Dimensions.get("window");
const ratio = win.width / 480; //541 is actual image width

const CartScreen = (props) => {
  const [courseOption, setCourseOption] = useState("key0");

  const onValueChange2 = (value) => {
    setCourseOption(value);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>2 items</Text>
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
            <Button style={{ ...styles.buttonRadius, ...styles.buttonBig, ...styles.buttonBuyNow }}>
              <Text style={{ color: "#fff" }}>Buy Now</Text>
            </Button>
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
            <Button style={{ ...styles.buttonRadius, ...styles.buttonBig, ...styles.buttonBuyNow }}>
              <Text style={{ color: "#fff" }}>Buy Now</Text>
            </Button>
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
  header:{
    fontWeight: '600',
    fontSize: 20,
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
  
  startCourse:{
    marginTop: 6,
    fontWeight: '600',
    fontSize: 13,
    color: Colors.primary,
  },
  buttonBig:{
    height: 32,
    borderWidth: 2,
    fontWeight: '700',
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,

  },
  buttonBuyNow: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    marginTop: 12,
    fontWeight: '600',
  }
});
export default CartScreen;
