import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import Badge from '../../../components/Badge';
import {statusColor} from '../../../utils/constant';

type props = {
  totalGroup: number;
};

const Summary = () => {
  const numberDummy = 8000000;
  const formattedNumberUS = numberDummy.toLocaleString('en-US', {
    style: 'currency',
    currency: 'IDR',
  });

  return (
    <View style={styles.container}>
      <View style={styles.appName}>
        <Icon name="activity" type="feather" color="#f0f0f0" />
        <Text style={styles.appNameText}>Arisankuy</Text>
      </View>
      <View style={styles.tagihanContainer}>
        <Text style={styles.appNameText}>Tagihan Perbulan</Text>
        <Text style={styles.tagihanContainerTextNumber}>
          {formattedNumberUS} | <Text style={{fontSize: 20}}>8 Group </Text>
        </Text>
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: statusColor.Berlangsung,
    elevation: 1,
    // marginHorizontal: 10,
    marginBottom: 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    padding: 10,
    gap: 10,
  },
  appName: {
    flexDirection: 'row',
    gap: 5,
  },
  appNameText: {color: '#f0f0f0', fontSize: 16, fontWeight: '600'},
  tagihanContainer: {},
  tagihanContainerText: {
    color: '',
  },
  tagihanContainerTextNumber: {
    fontSize: 25,
    color: '#f0f0f0',
    fontWeight: '800',
  },
  containerStatus: {
    flexDirection: 'row',
    gap: 10,
  },
});
