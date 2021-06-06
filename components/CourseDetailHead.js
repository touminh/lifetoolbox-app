import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import { Button } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Colors from "../constants/colors";

const win = Dimensions.get("window");
const ratio = win.width / 480; //541 is actual image width

const CourseDetailHead = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.preview_video_container}>
        <Image
          style={styles.preview_thumb}
          source={require("../assets/img-2.jpg")}
        />
        <Image
          style={styles.play_button}
          source={require("../assets/play-button.png")}
        />
      </View>
      <Text style={styles.title}>The Web Developer Bootcamp</Text>
      <Text style={styles.description}>
        The only course you need to learn web development - HTML, CSS, JS, Node,
        and More!
      </Text>
      <View style={styles.childContainer}>
        <Button style={{ ...styles.buttonRadius, ...styles.buttonReview }}>
          <Icon
            name="star-outline"
            style={{ fontSize: 16, color: "#fff", marginRight: 4 }}
          />
          <Text style={{ color: "#fff" }}>4.5</Text>
        </Button>
        <Text style={{ color: "#fff", marginLeft: 10 }}>(81,665 ratings)</Text>
      </View>
      <Text style={{ color: "#fff", ...styles.marginTop16 }}>
        114,521 students enrolled
      </Text>
      <View style={{ ...styles.childContainer, ...styles.marginTop16 }}>
        <Icon
          name="comment-account-outline"
          style={{ fontSize: 16, color: "#fff", marginRight: 4 }}
        />
        <Text style={styles.spacing}>English</Text>
        <Icon
          name="alpha-c-box-outline"
          style={{ fontSize: 16, color: "#fff", marginRight: 4 }}
        />
        <Text style={styles.spacing}>English, Khmer</Text>
        <Text style={styles.spacing}>3 more</Text>
      </View>
      <Text style={{ ...styles.spacing, ...styles.marginTop16 }}>
        Last updated 1/2020
      </Text>
      <View style={{...styles.childContainer, marginTop: 20, marginBottom: 20}}>
        <Button style={{ ...styles.buttonRadius, ...styles.buttonBig, ...styles.buttonAddToCart }}>
          <Text style={{ color: "#fff" }}>Add to Cart</Text>
        </Button>
        <Button style={{ ...styles.buttonRadius, ...styles.buttonBig, ...styles.buttonBuyNow }}>
          <Text style={{ color: "#fff" }}>Buy Now</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 14, paddingTop: 20, backgroundColor: "#333" },
  childContainer: { flexDirection: "row", alignItems: "center" },
  marginTop16: { marginTop: 16 },
  spacing: {
    color: Colors.white,
    marginRight: 10,
  },
  preview_video_container: {
    backgroundColor: "#fff",
    padding: 8,
    width: "100%",
    borderRadius: 10,
    flexDirection: "row",
    position: "relative",
  },
  preview_thumb: {
    width: "100%",
    height: 270 * ratio, //362 is actual height of image
    borderRadius: 5,
  },

  play_button: {
    width: 50,
    position: "absolute",
    top: "44.5%",
    left: "44.5%",
  },
  title: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 20,
  },
  description: {
    color: "#f7f7f7",
    fontSize: 15,
    marginBottom: 20,
    lineHeight: 22,
  },
  buttonRadius: {
    borderRadius: 20,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto , sans-serif",
  },
  buttonReview: {
    backgroundColor: Colors.primary,
    paddingTop: 3,
    paddingRight: 15,
    paddingBottom: 3,
    paddingLeft: 10,
    height: 26,
  },
  buttonBig:{
    height: 38,
    borderWidth: 2,
    fontWeight: '700',
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,

  },
  buttonAddToCart:{
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    marginRight: 12
  },
  buttonBuyNow: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  }
});

export default CourseDetailHead;
