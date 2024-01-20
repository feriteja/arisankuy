import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Dashboard from '../page/main/Dashboard';

export type MainStackParamList = {
  dashboard: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const Main = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default Main;
