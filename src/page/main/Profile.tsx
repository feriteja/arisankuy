import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../../components/Button';
import {logout} from '../auth/authfunc';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from '../../router/Index';
import {MainStackParamList} from '../../router/Main';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

type NavProps = CompositeScreenProps<
  BottomTabScreenProps<MainStackParamList, 'profile'>,
  NativeStackScreenProps<RootParamList>
>;

const Profile: React.FC<NavProps> = ({navigation}) => {
  const signout = async () => {
    try {
      await logout();
      return navigation.replace('authentication', {screen: 'login'});
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

export default Profile;

const styles = StyleSheet.create({});
