import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';

type props = {
  id: string;
};

const UserCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarPicture} />
      <View style={styles.content}>
        <Text style={styles.contentName}>Nama Peserta</Text>
        <Text>32 Periode</Text>
      </View>
      <View style={styles.optionCard}>
        <Icon style={{}} name="dots-three-vertical" type="entypo" />
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 1,
  },
  avatarPicture: {
    height: 35,
    width: 35,
    backgroundColor: '#faf',
    borderRadius: 100,
  },
  content: {flex: 1, paddingHorizontal: 5},
  contentName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  optionCard: {
    justifyContent: 'center',
    alignContent: 'center',
  },
});
