import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type props = {
  onPress: () => void;
  color?: string;
  text: string;
};

const Button = (props: props) => {
  return (
    <TouchableOpacity
      style={{backgroundColor: props.color || '#fff', ...styles.loginButton}}
      onPress={props.onPress}>
      <Text style={styles.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  loginButton: {
    borderColor: '#000',
    borderRadius: 10,
    elevation: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  textStyle: {fontSize: 22},
});
