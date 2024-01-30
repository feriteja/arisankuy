import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Dashboard from '../../page/main/Dashboard/Dashboard';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchGroup from '../../page/main/SearchGroup/SearchGroup';
import Profile from '../../page/main/Profile/Profile';
import {Icon} from '@rneui/themed';
import DashboardRoute, {
  DashboardStackParamList,
} from './Dashboard/DashboardRoute';
import DetailGroup from '../../page/main/DetailGroup/DetailGroup';
import {NavigatorScreenParams} from '@react-navigation/native';

export type MainStackParamList = {
  dashboard: NavigatorScreenParams<DashboardStackParamList>;
  detailGroup: {groupId: string; groupName: string};
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const Main = () => {
  return (
    <Stack.Navigator
      initialRouteName="dashboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="dashboard" component={DashboardRoute} />
      <Stack.Screen name="detailGroup" component={DetailGroup} />
    </Stack.Navigator>
  );
};

export default Main;
