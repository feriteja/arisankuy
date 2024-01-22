import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../../../components/Button';
import {logout} from '../../auth/authfunc';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from '../../../router/Index';
import {MainStackParamList} from '../../../router/Main';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
import {StarRating} from '../../../components/StarRating';
import Gap from '../../../components/Gap';

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
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Icon style={styles.backIcon} name="arrow-left" type="feather" />
        <Text style={styles.barText}>Akun Saya</Text>
      </View>
      <View style={styles.userInfoContainer}>
        <Image
          source={require('../../../assets/image/avatar_dummy.png')}
          style={styles.avatarImg}
        />
        <View style={styles.userInfoContent}>
          <Text style={styles.userInfoName}>Anisa Permata Sari</Text>
          <Text style={styles.infoText}>081xxxxxxxx</Text>
          <Text style={styles.infoText}>anixxx@email.com</Text>
        </View>
        <View></View>
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>Rating ku</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <StarRating rating={4} />
          <View style={styles.ratingValue}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>4.5/5</Text>
            <Text>12 Group</Text>
          </View>
        </View>
      </View>
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
  userInfoContainer: {
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  avatarImg: {
    height: 70,
    width: 70,
    borderRadius: 80,
  },
  userInfoName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  userInfoContent: {
    marginLeft: 10,
  },
  infoText: {
    color: '#000',
  },
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
});
