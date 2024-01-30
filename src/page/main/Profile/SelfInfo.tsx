import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StarRating} from '../../../components/StarRating';

const SelfInfo = () => {
  return (
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
      <View>
        <StarRating size={16} rating={4} />
      </View>
    </View>
  );
};

export default SelfInfo;

const styles = StyleSheet.create({
  userInfoContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  avatarImg: {
    height: 70,
    width: 70,
    borderRadius: 80,
  },
  infoText: {
    color: '#000',
  },
  userInfoName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  userInfoContent: {
    marginLeft: 10,
    flex: 1,
  },
});
