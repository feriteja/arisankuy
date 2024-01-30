import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {statusColor} from '../../../utils/constant';

const TrackStatus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text>10</Text>
        <Text>Persiapan</Text>
        <View
          style={{
            backgroundColor: statusColor['Persiapan'],
            ...styles.barInfo,
          }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text>10</Text>
        <Text>Berlangsung</Text>
        <View
          style={{
            backgroundColor: statusColor['Berlangsung'],
            ...styles.barInfo,
          }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text>10</Text>
        <Text>Selesai</Text>
        <View
          style={{
            backgroundColor: statusColor['Selesai'],
            ...styles.barInfo,
          }}
        />
      </View>
    </View>
  );
};

export default TrackStatus;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 1,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  barInfo: {
    height: 5,
    borderRadius: 111,
    width: 60,
    position: 'absolute',
    bottom: 5,
  },
});
