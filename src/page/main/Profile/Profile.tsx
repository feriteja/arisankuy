import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../../../components/Button';
import {logout} from '../../auth/authfunc';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from '../../../router/Index';
import {MainStackParamList} from '../../../router/Main/Main';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
import {StarRating} from '../../../components/StarRating';
import Gap from '../../../components/Gap';
import SelfInfo from './SelfInfo';
import TrackStatus from './TrackStatus';
import {DashboardStackParamList} from '../../../router/Main/Dashboard/DashboardRoute';
import {StackScreenProps} from '@react-navigation/stack';

type NavProps = CompositeScreenProps<
  BottomTabScreenProps<DashboardStackParamList, 'profile'>,
  CompositeScreenProps<
    StackScreenProps<MainStackParamList>,
    StackScreenProps<RootParamList>
  >
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
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Icon style={styles.backIcon} name="arrow-left" type="feather" />
        <Text style={styles.barText}>Akun Saya</Text>
      </View>
      <SelfInfo />
      <Gap height={20} />
      <Text style={styles.textTitle}>Track Status</Text>
      <TrackStatus />
      <Gap style={{flex: 1}} />
      <View>
        <CustomButton onPress={signout} text="SignOut" />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {flex: 1},
  backIcon: {
    padding: 10,
  },
  barText: {
    fontSize: 20,
    fontWeight: '600',
  },
  topBar: {flexDirection: 'row', alignItems: 'center'},

  ratingContainer: {
    elevation: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '600',
  },
  ratingValue: {alignItems: 'center'},
  textTitle: {
    marginHorizontal: 10,
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 5,
  },
});
