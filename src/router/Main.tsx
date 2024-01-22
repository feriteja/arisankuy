import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Dashboard from '../page/main/Dashboard/Dashboard';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchGroup from '../page/main/SearchGroup/SearchGroup';
import Profile from '../page/main/Profile/Profile';
import {Icon} from '@rneui/themed';

export type MainStackParamList = {
  dashboard: undefined;
  searchGroup: undefined;
  profile: undefined;
};

const Tab = createBottomTabNavigator<MainStackParamList>();

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#492E87',
      }}>
      <Tab.Screen
        name="dashboard"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="home"
              type="feather"
              backgroundColor="transparent"
              color={color}
            />
          ),
        }}
        component={Dashboard}
      />
      <Tab.Screen
        name="searchGroup"
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="search"
              type="feather"
              backgroundColor="transparent"
              color={color}
            />
          ),
        }}
        component={SearchGroup}
      />
      <Tab.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="user"
              type="feather"
              backgroundColor="transparent"
              color={color}
            />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Main;
