import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import Auth, {AuthStackParamList} from './Auth';
import Main, {MainStackParamList} from './Main/Main';
import auth from '@react-native-firebase/auth';
import {Text, View} from 'react-native';
import SplashScreen from '../page/splash/SplashScreen';
import DashboardRoute from './Main/Dashboard/DashboardRoute';

export type RootParamList = {
  authentication: NavigatorScreenParams<AuthStackParamList>;
  main: NavigatorScreenParams<MainStackParamList>;
};

const Stack = createNativeStackNavigator<RootParamList>();

const Index = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<keyof RootParamList>('authentication');

  function onAuthStateChanged(user: any) {
    console.log({user});
    if (user) {
      setUser('main');
    } else {
      setUser('authentication');
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator
      initialRouteName={'main'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="authentication" component={Auth} />
      <Stack.Screen name="main" component={Main} />
    </Stack.Navigator>
  );
};

export default Index;
