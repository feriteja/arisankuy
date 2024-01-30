import {
  Alert,
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {Icon} from '@rneui/themed';

import {IconProps} from '@rneui/base';

type props = {
  secret?: boolean;
  placeHolder?: string;
  title: string;
  children?: ReactNode;
  onTextChange: (string: string) => void;
  keyboardType?: KeyboardTypeOptions;
};

const AuthTextInput = (props: props) => {
  const [InputState, setInputState] = useState('second');
  const [isSecret, setisSecret] = useState<boolean>(props.secret || false);

  const onTextChange = (input: string) => {
    setInputState(InputState);
    props.onTextChange(input);
  };

  return (
    <View style={styles.container}>
      {props.children}
      <TextInput
        style={{flex: 1}}
        placeholder={props.placeHolder}
        secureTextEntry={isSecret}
        keyboardType={props.keyboardType}
        onChangeText={text => onTextChange(text)}
      />
      {props.secret &&
        (isSecret ? (
          <Icon
            onPress={() => setisSecret(false)}
            name="lock"
            type="feather"
            backgroundColor="transparent"
          />
        ) : (
          <Icon
            onPress={() => setisSecret(true)}
            name="unlock"
            type="feather"
            backgroundColor="transparent"
          />
        ))}
    </View>
  );
};

export default AuthTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderRadius: 70,
    elevation: 1,
    width: 240,
    paddingHorizontal: 10,
  },
});
