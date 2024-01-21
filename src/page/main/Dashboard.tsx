import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../../components/Button';
import {logout} from '../auth/authfunc';

const Dashboard = ({navigation}: any) => {
  const signout = async () => {
    try {
      await logout();
      return navigation.replace('authentication');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <CustomButton text="logout" onPress={signout} />
    </View>
  );
};

export default Dashboard;
