import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CourseDetailAnnouncements = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
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
            <Text style={styles.name}>Sokeng Vorn</Text>
            <Text style={styles.ago}>1 week ago</Text>
          </View>
        </View>
        <View style={styles.contentCotainer}>
          <Text style={styles.title}>AOC is starting Tomorrow!</Text>
          <Text style={styles.content}>
            Helloooooo ZTM students 👋! We have another big month ahead of us
            and the most popular event of the year is starting tomorrow, Advent
            Of Code Challenge🌲! Let's get into the community updates (new
            workshop announcement) and what this AOC challenge is all about: The
            best way to stay up to date with industry news is here again to
            recap what happened this month. Here is the new Web Developer
            Monthly, Python Monthly and Machine Learning Monthly.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
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
            <Text style={styles.name}>Sokeng Vorn</Text>
            <Text style={styles.ago}>3 weeks ago</Text>
          </View>
        </View>
        <View style={styles.contentCotainer}>
          <Text style={styles.title}>New Updates + Lectures For 2021!</Text>
          <Text style={styles.content}>
            You're going to love this one...I've updated all ZTM courses to be
            2021 ready! That means free updated videos and content for you 💪!
            My goal as an instructor is to be known for always up to date and
            modern content. Therefore, I have made a lot of updates and changes
            to my existing courses so I can deliver on my promise to you (Ps if
            you have been around for a while now, you know that I do this every
            year).
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 14, paddingTop: 20, backgroundColor: "#fff" },
  listContainer: {
    marginBottom: 10,
  },
  card: {
    marginBottom: 18,
    paddingBottom: 18,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  profileContainer: {
    flexDirection: "row",
  },
  profile_img_border: {
    borderColor: "#dedede",
    borderWidth: 1,
    borderRadius: 40,
  },
  profile_img: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderColor: "#fff",
    borderWidth: 2,
  },
  nameContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 14,
    color: "#333",
  },
  ago: {
    fontSize: 13,
    marginTop: 2,
    color: "#333",
  },
  contentCotainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  content: {},
});

export default CourseDetailAnnouncements;
