import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import Auth, {AuthStackParamList} from './Auth';
import Main from './Main';
import auth from '@react-native-firebase/auth';
import {Text, View} from 'react-native';
import SplashScreen from '../page/splash/SplashScreen';

export type RootParamList = {
  authentication: NavigatorScreenParams<AuthStackParamList>;
  main: undefined;
};

const Stack = createNativeStackNavigator<RootParamList>();

const Index = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<keyof RootParamList>('authentication');

  function onAuthStateChanged(user: any) {
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

  if (initializing) return <SplashScreen />;

  return (
    <Stack.Navigator
      initialRouteName={user}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="authentication" component={Auth} />
      <Stack.Screen name="main" component={Main} />
    </Stack.Navigator>
  );
};

export default Index;
