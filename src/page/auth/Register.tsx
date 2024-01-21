import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Alert,
} from 'react-native';
import React from 'react';
import AuthTextInput from '../../components/AuthTextInput';
import Gap from '../../components/Gap';
import CustomButton from '../../components/Button';
import {AuthStackParamList} from '../../router/Auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {register} from './authfunc';
import {CompositeScreenProps} from '@react-navigation/native';
import {RootParamList} from '../../router/Index';
import {MainStackParamList} from '../../router/Main';

// type NavProps = NativeStackScreenProps<AuthStackParamList, 'register'>;
type NavProps = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, 'register'>,
  NativeStackScreenProps<RootParamList>
>;

const Register = ({navigation}: NavProps) => {
  const authData = {
    email: '',
    password: '',
    confPassword: '',
  };

  const signup = async () => {
    try {
      const status = await register(
        authData.email,
        authData.password,
        authData.confPassword,
      );
      if (status) {
        return navigation.replace('main');
      }
    } catch (error: any) {
      Alert.alert('Signup failed', error);
    }
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
        <AuthTextInput
          title="confirm password"
          placeHolder="Confirm Password"
          secret={true}
          onTextChange={text => (authData.confPassword = text)}
        />
        <Gap height={20} />
        <CustomButton text="Register" onPress={() => signup()} />
        <Gap height={100} />
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

export default Register;
