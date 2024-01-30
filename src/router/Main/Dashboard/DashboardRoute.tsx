import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Dashboard from '../../../page/main/Dashboard/Dashboard';
import DetailGroup from '../../../page/main/DetailGroup/DetailGroup';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
import SearchGroup from '../../../page/main/SearchGroup/SearchGroup';
import Profile from '../../../page/main/Profile/Profile';

export type DashboardStackParamList = {
  dashboardRoute: undefined;
  searchGroup: undefined;
  profile: undefined;
};

const Tab = createBottomTabNavigator<DashboardStackParamList>();

const DashboardRoute = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#492E87',
      }}>
      <Tab.Screen
        name="dashboardRoute"
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

export default DashboardRoute;
