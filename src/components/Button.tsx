import {
  Alert,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';

type props = {
  onPress: () => void;
  color?: string;
  text: string;
};

const Button = (props: props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View
        style={{backgroundColor: props.color || '#fff', ...styles.loginButton}}>
        <Text style={styles.textStyle}>{props.text}</Text>
      </View>
    </TouchableWithoutFeedback>
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
