import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Auth, {AuthStackParamList} from './Auth';
import Main from './Main';

type RootParamList = {
  authentication: NavigatorScreenParams<AuthStackParamList>;
  main: undefined;
};

const Stack = createNativeStackNavigator<RootParamList>();

const Index = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="authentication" component={Auth} />
      <Stack.Screen name="main" component={Main} />
    </Stack.Navigator>
  );
};

export default Index;
