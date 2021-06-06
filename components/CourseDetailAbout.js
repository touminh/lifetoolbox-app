import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CourseDetailAbout = (props) => {
  return (
    <View>
      <Text style={styles.textHead1}>Requirements</Text>
      <View style={styles.row}>
        <Text style={styles.bullet}>{"\u2022" + " "}</Text>
        <Text style={styles.textList}>Have a computer with Internet</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.bullet}>{"\u2022" + " "}</Text>
        <Text style={styles.textList}>
          Be ready to learn an insane amount of awesome stuff
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.bullet}>{"\u2022" + " "}</Text>
        <Text style={styles.textList}>Prepare to build real web apps!</Text>
      </View>
      <View style={styles.separate}></View>
      <Text style={styles.textHead1}>Description</Text>
      <Text style={styles.textHead3}>
        Just updated to include Bootstrap 4.1.3!
      </Text>
      <Text style={styles.contentText}>
        Hi! Welcome to the Web Developer Bootcamp, the{" "}
        <Text style={styles.boldText}>
          only course you need to learn web development
        </Text>
        . There are a lot of options for online developer training, but this
        course is without a doubt the most comprehensive and effective on the
        market. Here's why
      </Text>

      <View style={styles.separate16}></View>

      <View style={styles.paddingLeft16}>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textList}>
            Be ready to learn an insane amount of awesome stuff
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textList}>
            94% of my in-person bootcamp students go on to get full-time
            developer jobs. Most of them are complete beginners when I start
            working with them.
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textList}>
            The previous 2 bootcamp programs that I taught cost $14,000 and
            $21,000. This course is just as comprehensive but with brand new
            content for a fraction of the price.
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textList}>
            Everything I cover is up-to-date and relevant to today's developer
            industry. No PHP or other dated technologies. This course does not
            cut any corners.
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textList}>
            This is the only complete beginner full-stack developer course that
            covers NodeJS.
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textList}>
            We build 13+ projects, including a gigantic production application
            called YelpCamp. No other course walks you through the creation of
            such a substantial application.
          </Text>
        </View>
      </View>

      <View style={styles.separate16}></View>

      <Text style={styles.contentText}>
        When you're learning to program you often have to sacrifice learning the
        exciting and current technologies in favor of the "beginner friendly"
        classes. With this course, you get the best of both worlds. This is a
        course designed for the complete beginner, yet it covers some of the
        most exciting and relevant topics in the industry.
      </Text>

      <View style={styles.separate16}></View>

      <Text style={styles.contentText}>
        Throughout the course we cover tons of tools and technologies including:
      </Text>
      <View style={styles.separate16}></View>
      <View style={styles.paddingLeft16}>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textListBold}>HTML5</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textListBold}>CSS3</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textListBold}>JavaScript</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textListBold}>Bootstrap 4</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textListBold}>SemanticUI</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textListBold}>DOM Manipulation</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textListBold}>jQuery</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textListBold}>Unix(Command Line) Commands</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textListBold}>NodeJS</Text>
        </View>
      </View>

      <View style={styles.separate16}></View>
      <Text style={styles.textHead1}>Who this course is for :</Text>
      <View style={styles.paddingLeft16}>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textList}>
            This course is for anyone who wants to learn about web development,
            regardless of previous experience
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textList}>
            It's perfect for complete beginners with zero experience
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textList}>
            It's also great for anyone who does have some experience in a few of
            the technologies(like HTML and CSS) but not all
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bullet}>{"\u2022" + " "}</Text>
          <Text style={styles.textList}>
            If you want to take ONE COURSE to learn everything you need to know
            about web development, take this course
          </Text>
        </View>
      </View>

      <View style={styles.whiteContainer}>
        <Text style={styles.textHead1}>What you'll learn</Text>
        <View>
          <View style={styles.row}>
            <Icon name="check-circle" style={styles.iconCheck} />
            <Text style={styles.textList}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="check-circle" style={styles.iconCheck} />
            <Text style={styles.textList}>
            Donec ultricies elit porttitor, ultrices enim a, commodo dolor.
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="check-circle" style={styles.iconCheck} />
            <Text style={styles.textList}>
            Nunc dapibus ligula sed justo porta, id volutpat odio iaculis.
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="check-circle" style={styles.iconCheck} />
            <Text style={styles.textList}>
            Maecenas pharetra mi quis nisl mollis, molestie imperdiet lorem molestie.
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="check-circle" style={styles.iconCheck} />
            <Text style={styles.textList}>
            Nullam non lacus nibh. Etiam et fringilla neque, ut vulputate sapien. Sed vitae tortor gravida, interdum felis at, pulvinar enim. Integer tempor urna leo.
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="check-circle" style={styles.iconCheck} />
            <Text style={styles.textList}>
            Maecenas pharetra mi quis nisl mollis, molestie imperdiet lorem molestie.
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="check-circle" style={styles.iconCheck} />
            <Text style={styles.textList}>
            Maecenas pharetra mi quis nisl mollis, molestie imperdiet lorem molestie.
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="check-circle" style={styles.iconCheck} />
            <Text style={styles.textList}>
            Maecenas pharetra mi quis nisl mollis, molestie imperdiet lorem molestie.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
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
  bullet: {
    width: 14,
    fontWeight: "600",
  },
  boldText: {
    fontWeight: "bold",
  },
  separate: {
    height: 22,
  },
  separate16: {
    height: 16,
  },
  textList: {
    lineHeight: 22,
  },
  textListBold: {
    lineHeight: 22,
    fontWeight: "600",
  },
  contentText: {
    lineHeight: 22,
  },
  paddingLeft16: {
    paddingLeft: 16,
  },
  whiteContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    paddingRight: 26,
    marginTop: 26,
  },
  iconCheck:{
    fontSize: 16,
    marginTop: 3,
    marginRight: 8,
  }
});

export default CourseDetailAbout;
