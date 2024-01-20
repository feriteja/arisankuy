import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import AuthTextInput from '../../components/AuthTextInput';
import CustomButton from '../../components/Button';
import Gap from '../../components/Gap';
import {AuthStackParamList} from '../../router/Auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Icon} from '@rneui/themed';

type NavProps = NativeStackScreenProps<AuthStackParamList, 'login'>;

const Login = ({navigation}: NavProps) => {
  const authData = {
    email: '',
    password: '',
  };
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={{fontSize: 40}}>Arisan Kuy</Text>
      </View>
      <Gap height={100} />
      <View style={style.inputFieldContainer}>
        <AuthTextInput
          title="email"
          placeHolder="email"
          onTextChange={text => (authData.email = text)}
        />
        <AuthTextInput
          title="password"
          placeHolder="Password"
          secret={true}
          onTextChange={text => (authData.password = text)}
        />
        <Gap height={20} />
        <CustomButton text="Login" onPress={() => console.log(authData)} />
        <Gap height={40} />
        <Text>or login by</Text>
        <Icon name="logo-google" type="ionicon" color="#517fa4" size={40} />
        <Gap height={50} />
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('register')}>
          <Text>Register</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Text>Forgot Password ?</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputFieldContainer: {
    width: 'auto',
    flex: 3,
    marginHorizontal: 30,
    alignItems: 'center',
    gap: 8,
  },
  loginButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 1,
    borderRadius: 10,
    borderColor: '#000',
    backgroundColor: 'lightblue',
  },
});

export default Login;
