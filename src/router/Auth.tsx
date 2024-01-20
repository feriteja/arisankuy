import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Register from '../page/auth/Register';
import Login from '../page/auth/Login';

export type AuthStackParamList = {
  login: undefined;
  register: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
};

export default Auth;
