import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from '../constants/colors';

const BoxBody = (props) => {
  return <View style={{...styles.screen, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
    screen:{
        borderRadius: 10,
        backgroundColor: Colors.boxBody,
        padding: 20,
        overflow: 'hidden',
    }
});

export default BoxBody;
