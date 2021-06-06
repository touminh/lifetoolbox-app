import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Dimensions,
  Animated,
} from "react-native";

import Carousel from "react-native-snap-carousel";
import PropTypes from "prop-types";

const { width } = Dimensions.get("window");

function MyComponent(props) {
  const styles = StyleSheet.create({
    container: {
      paddingVertical: 12,
      width: "100%",
    },
    display: {
      alignItems: "center",
    },
    carousel: {
      borderRadius: 10,
      overflow: "hidden",
    },
    image: {
      borderRadius: 10,
      height: 200,
      width: 200,
    },
  });

  const [ready, setReady] = useState(false);
  const [carouselOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    init();
    return () => {};
  });

  const init = () => {
    setReady(true);
    Animated.timing(carouselOpacity, { toValue: 1, duration: 500 }).start();
  };

  return (
    <View style={styles.container}>
      <Text>Example</Text>
      <Animated.View style={[styles.display, { opacity: carouselOpacity }]}>
        {props.images.length > 1 && ready ? (
          <Carousel
            ref={(c) => ({})}
            /*
            layout={'stack'} 
            layoutCardOffset={`18`}
            */
            data={props.images}
            slideStyle={styles.carousel}
            sliderWidth={width}
            itemWidth={width - 32}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.9}
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={1} onPress={() => {}}>
                <Image style={styles.image} source={item} />
              </TouchableOpacity>
            )}
          />
        ) : (
          <View style={{ paddingHorizontal: 16 }}>
            <TouchableOpacity activeOpacity={1} onPress={() => {}}>
              <Image style={styles.image} source={props.images[0]} />
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    </View>
  );
}

MyComponent.propTypes = {
  images: PropTypes.array,
};

MyComponent.defaultProps = {
  images: [],
};

export default MyComponent;
