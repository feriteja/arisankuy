import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  height?: number;
  width?: number;
  style?: StyleProp<ViewStyle>;
};

const Gap = ({height = 0, width = 0, style}: Props) => {
  return <View style={{height, width, ...(style as object)}} />;
};

export default Gap;
