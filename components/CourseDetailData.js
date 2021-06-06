import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CourseDetailData = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View>
          <View style={styles.profile_img_border}>
            <Image
              style={styles.profile_img}
              source={require("../assets/img-1.jpg")}
            />
          </View>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.teacherName}>Sokeng Vorn</Text>
          <View style={styles.infoContainer}>
            <Icon name="briefcase-account-outline" style={styles.infoIcon} />
            <Text style={styles.infoText}>1,405,055</Text>
            <Text style={styles.infoLast}>Students</Text>
          </View>
          <View style={styles.infoContainer}>
            <Icon name="clipboard-play-outline" style={styles.infoIcon} />
            <Text style={styles.infoText}>15</Text>
            <Text style={styles.infoLast}>Courese</Text>
          </View>
        </View>
      </View>
      <View style={styles.userDataContainer}>
        <View style={styles.userData}>
          <Icon name="eye-outline" style={styles.userDataIcon} />
          <Text style={styles.userDataText}>1452</Text>
        </View>
        <View style={styles.userData}>
          <Icon name="thumb-up-outline" style={styles.userDataIcon} />
          <Text style={styles.userDataText}>100</Text>
        </View>
        <View style={styles.userData}>
          <Icon name="thumb-down-outline" style={styles.userDataIcon} />
          <Text style={styles.userDataText}>12</Text>
        </View>
        <View style={styles.userData}>
          <Icon name="share-variant" style={styles.userDataIcon} />
          <Text style={styles.userDataText}>52</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 14, paddingTop: 20, backgroundColor: "#fff" },
  profileContainer: {
    flexDirection: "row",
  },
  profile_img_border: {
    borderColor: "#dedede",
    borderWidth: 1,
    borderRadius: 50,
  },
  profile_img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 2,
  },
  nameContainer: {
    marginLeft: 12,
  },
  teacherName: {
    fontSize: 18,
  },
  infoContainer: {
    flexDirection: "row",
    marginTop: 6,
  },
  infoIcon: {
    fontSize: 16,
    color: "#555",
  },
  infoText: {
    color: "#333",
    marginLeft: 6,
    marginRight: 4,
  },
  infoLast: {
    color: "#555",
  },
  userDataContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  userData: {
    width: "24%",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#efefef",
    paddingTop: 6,
    paddingBottom: 6,
    marginRight: "1%",
  },
  userDataIcon: {
    fontSize: 16,
    color: "#686f7a",
  },
  userDataText: {
    marginTop: 4,
    color: "#333",
  },
});

export default CourseDetailData;
