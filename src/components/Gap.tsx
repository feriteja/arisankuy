import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';

type props = {
  height?: number;
  width?: number;
  style?: StyleProp<ViewStyle>;
};

const Gap = ({height = 0, width = 0, ...style}: props) => {
  return <View style={{height, width, ...style}} />;
};

export default Gap;
