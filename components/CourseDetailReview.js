import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ListItem, CheckBox, Body } from "native-base";

import { color } from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../constants/colors";

const CourseDetailReview = (props) => {
  return (
    <View>
      <View style={styles.whiteContainer}>
        <Text style={styles.textHead1}>Student Feedback</Text>
        <View>
          <View style={styles.row}>
            <View>
              <Text style={styles.percentBarContainer}></Text>
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
            <View style={{ ...styles.row, ...styles.starContainer }}>
              <Icon
                name="star"
                style={{ ...styles.iconStar, ...styles.iconStarRated }}
              />
              <Icon
                name="star"
                style={{ ...styles.iconStar, ...styles.iconStarRated }}
              />
              <Icon
                name="star"
                style={{ ...styles.iconStar, ...styles.iconStarRated }}
              />
              <Icon
                name="star"
                style={{ ...styles.iconStar, ...styles.iconStarRated }}
              />
              <Icon
                name="star"
                style={{ ...styles.iconStar, ...styles.iconStarRated }}
              />
              <Text style={styles.percentNumber}>70%</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.row}>
            <View>
              <Text style={styles.percentBarContainer}></Text>
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
            <View style={{ ...styles.row, ...styles.starContainer }}>
              <Icon
                name="star"
                style={{ ...styles.iconStar, ...styles.iconStarRated }}
              />
              <Icon
                name="star"
                style={{ ...styles.iconStar, ...styles.iconStarRated }}
              />
              <Icon
                name="star"
                style={{ ...styles.iconStar, ...styles.iconStarRated }}
              />
              <Icon
                name="star"
                style={{ ...styles.iconStar, ...styles.iconStarRated }}
              />
              <Icon name="star" style={{ ...styles.iconStar }} />
              <Text style={styles.percentNumber}>40%</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.row}>
            <View>
              <Text style={styles.percentBarContainer}></Text>
              <Text
                style={{
                  ...styles.percentBar,
                  backgroundColor: Colors.primary,
                  width: 20,
                }}
              >
                {" "}
              </Text>
            </View>
            <View style={{ ...styles.row, ...styles.starContainer }}>
              <Icon
                name="star"
                style={{ ...styles.iconStar, ...styles.iconStarRated }}
              />
              <Icon
                name="star"
                style={{ ...styles.iconStar, ...styles.iconStarRated }}
              />
              <Icon
                name="star"
                style={{ ...styles.iconStar, ...styles.iconStarRated }}
              />
              <Icon name="star" style={{ ...styles.iconStar }} />
              <Icon name="star" style={{ ...styles.iconStar }} />
              <Text style={styles.percentNumber}>20%</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.row}>
            <View>
              <Text style={styles.percentBarContainer}></Text>
              <Text
                style={{
                  ...styles.percentBar,
                  backgroundColor: Colors.primary,
                  width: 10,
                }}
              >
                {" "}
              </Text>
            </View>
            <View style={{ ...styles.row, ...styles.starContainer }}>
              <Icon
                name="star"
                style={{ ...styles.iconStar, ...styles.iconStarRated }}
              />
              <Icon
                name="star"
                style={{ ...styles.iconStar, ...styles.iconStarRated }}
              />
              <Icon name="star" style={{ ...styles.iconStar }} />
              <Icon name="star" style={{ ...styles.iconStar }} />
              <Icon name="star" style={{ ...styles.iconStar }} />
              <Text style={styles.percentNumber}>10%</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.row}>
            <View>
              <Text style={styles.percentBarContainer}></Text>
              <Text
                style={{
                  ...styles.percentBar,
                  backgroundColor: Colors.primary,
                  width: 5,
                }}
              >
                {" "}
              </Text>
            </View>
            <View style={{ ...styles.row, ...styles.starContainer }}>
              <Icon
                name="star"
                style={{ ...styles.iconStar, ...styles.iconStarRated }}
              />
              <Icon name="star" style={{ ...styles.iconStar }} />
              <Icon name="star" style={{ ...styles.iconStar }} />
              <Icon name="star" style={{ ...styles.iconStar }} />
              <Icon name="star" style={{ ...styles.iconStar }} />
              <Text style={styles.percentNumber}>5%</Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={{ ...styles.textHead1, marginTop: 26 }}>Reviews</Text>
      <View style={{ marginTop: 10 }}>
        <View style={{ ...styles.reviewContainer, ...styles.radiusTop }}>
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
              <Text style={styles.ago}>2 hour ago</Text>
            </View>
          </View>

          <View style={styles.starContainerReview}>
            <Icon
              name="star"
              style={{ ...styles.iconStar, ...styles.iconStarRated }}
            />
            <Icon
              name="star"
              style={{ ...styles.iconStar, ...styles.iconStarRated }}
            />
            <Icon
              name="star"
              style={{ ...styles.iconStar, ...styles.iconStarRated }}
            />
            <Icon
              name="star"
              style={{ ...styles.iconStar, ...styles.iconStarRated }}
            />
            <Icon name="star" style={{ ...styles.iconStar }} />
          </View>
          <Text style={styles.textReview}>
            Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia,
            nunc sit amet tincidunt venenatis.
          </Text>
          <View style={styles.rowBetween}>
            <Text>Was this review helpful?</Text>
            <View style={styles.row}>
              <View style={styles.row}>
                <CheckBox
                  checked={false}
                  color={Colors.primary}
                  style={styles.optYesNo}
                />
                <Text style={styles.textYesNo}>Yes</Text>
              </View>
              <View style={styles.row}>
                <CheckBox
                  checked={false}
                  color={Colors.primary}
                  style={styles.optYesNo}
                />
                <Text style={styles.textYesNo}>No</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.reviewContainer}>
          <View style={styles.profileContainer}>
            <View>
              <View style={styles.profile_img_border}>
                <Image
                  style={styles.profile_img}
                  source={require("../assets/img-3.jpg")}
                />
              </View>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.teacherName}>Sokeng Vorn</Text>
              <Text style={styles.ago}>18 hour ago</Text>
            </View>
          </View>

          <View style={styles.starContainerReview}>
            <Icon
              name="star"
              style={{ ...styles.iconStar, ...styles.iconStarRated }}
            />
            <Icon
              name="star"
              style={{ ...styles.iconStar, ...styles.iconStarRated }}
            />
            <Icon
              name="star"
              style={{ ...styles.iconStar}}
            />
            <Icon
              name="star"
              style={{ ...styles.iconStar}}
            />
            <Icon name="star" style={{ ...styles.iconStar }} />
          </View>
          <Text style={styles.textReview}>
            Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia,
            nunc sit amet tincidunt venenatis.
          </Text>
          <View style={styles.rowBetween}>
            <Text>Was this review helpful?</Text>
            <View style={styles.row}>
              <View style={styles.row}>
                <CheckBox
                  checked={false}
                  color={Colors.primary}
                  style={styles.optYesNo}
                />
                <Text style={styles.textYesNo}>Yes</Text>
              </View>
              <View style={styles.row}>
                <CheckBox
                  checked={false}
                  color={Colors.primary}
                  style={styles.optYesNo}
                />
                <Text style={styles.textYesNo}>No</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.reviewContainer}>
          <View style={styles.profileContainer}>
            <View>
              <View style={styles.profile_img_border}>
                <Image
                  style={styles.profile_img}
                  source={require("../assets/img-4.jpg")}
                />
              </View>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.teacherName}>Sokeng Vorn</Text>
              <Text style={styles.ago}>1 day ago</Text>
            </View>
          </View>

          <View style={styles.starContainerReview}>
            <Icon
              name="star"
              style={{ ...styles.iconStar, ...styles.iconStarRated }}
            />
            <Icon
              name="star"
              style={{ ...styles.iconStar, ...styles.iconStarRated }}
            />
            <Icon
              name="star"
              style={{ ...styles.iconStar, ...styles.iconStarRated }}
            />
            <Icon
              name="star"
              style={{ ...styles.iconStar}}
            />
            <Icon name="star" style={{ ...styles.iconStar }} />
          </View>
          <Text style={styles.textReview}>
            Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia,
            nunc sit amet tincidunt venenatis.
          </Text>
          <View style={styles.rowBetween}>
            <Text>Was this review helpful?</Text>
            <View style={styles.row}>
              <View style={styles.row}>
                <CheckBox
                  checked={false}
                  color={Colors.primary}
                  style={styles.optYesNo}
                />
                <Text style={styles.textYesNo}>Yes</Text>
              </View>
              <View style={styles.row}>
                <CheckBox
                  checked={false}
                  color={Colors.primary}
                  style={styles.optYesNo}
                />
                <Text style={styles.textYesNo}>No</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.reviewContainer}>
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
              <Text style={styles.ago}>2 day ago</Text>
            </View>
          </View>

          <View style={styles.starContainerReview}>
            <Icon
              name="star"
              style={{ ...styles.iconStar, ...styles.iconStarRated }}
            />
            <Icon
              name="star"
              style={{ ...styles.iconStar, ...styles.iconStarRated }}
            />
            <Icon
              name="star"
              style={{ ...styles.iconStar, ...styles.iconStarRated }}
            />
            <Icon
              name="star"
              style={{ ...styles.iconStar, ...styles.iconStarRated }}
            />
            <Icon name="star" style={{ ...styles.iconStar }} />
          </View>
          <Text style={styles.textReview}>
            Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia,
            nunc sit amet tincidunt venenatis.
          </Text>
          <View style={styles.rowBetween}>
            <Text>Was this review helpful?</Text>
            <View style={styles.row}>
              <View style={styles.row}>
                <CheckBox
                  checked={false}
                  color={Colors.primary}
                  style={styles.optYesNo}
                />
                <Text style={styles.textYesNo}>Yes</Text>
              </View>
              <View style={styles.row}>
                <CheckBox
                  checked={false}
                  color={Colors.primary}
                  style={styles.optYesNo}
                />
                <Text style={styles.textYesNo}>No</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.reviewContainer}>
          <TouchableOpacity>
            <Text style={styles.seeMore}>See More Reviews</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  reviewContainer: {
    borderBottomColor: "#f7f7f7",
    borderBottomWidth: 2,
    backgroundColor: "#fff",
    padding: 16,
    paddingRight: 26,
  },
  radiusTop: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textHead1: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: "600",
  },
  whiteContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    paddingRight: 26,
    marginTop: 26,
  },
  percentBarContainer: {
    borderRadius: 4,
    height: 20,
    width: 100,
    display: "flex",
    overflow: "hidden",
    lineHeight: 0,
    backgroundColor: "#e9ecef",
    marginTop: 8,
  },
  percentBar: {
    borderRadius: 2,
    height: 20,
    width: 55,
    display: "flex",
    overflow: "hidden",
    lineHeight: 0,
    backgroundColor: Colors.primary,
    marginTop: -20,
  },
  starContainer: {
    marginTop: 5,
  },
  starContainerReview: {
    flexDirection: "row",
    marginTop: 10,
  },
  iconStar: {
    fontSize: 24,
    marginLeft: 6,
    color: "#e9ecef",
  },
  iconStarRated: {
    color: "#f2b01e",
  },
  percentNumber: {
    fontSize: 14,
    marginTop: 5,
    marginLeft: 8,
    color: "#333",
  },
  profileContainer: {
    flexDirection: "row",
  },
  profile_img_border: {
    borderColor: "#dedede",
    borderWidth: 1,
    borderRadius: 46,
  },
  profile_img: {
    width: 46,
    height: 46,
    borderRadius: 46,
    borderColor: "#fff",
    borderWidth: 2,
  },
  nameContainer: {
    marginLeft: 12,
  },
  teacherName: {
    fontSize: 16,
    marginTop: 2,
  },
  ago: {
    color: "#333",
    marginTop: 4,
    fontSize: 14,
  },
  textReview: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 20,
  },
  optYesNo: {
    width: 14,
    height: 14,
  },
  textYesNo: {
    marginLeft: 14,
    marginTop: -1,
    fontSize: 14,
  },
  seeMore: {
    textAlign: "center",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
});

export default CourseDetailReview;
