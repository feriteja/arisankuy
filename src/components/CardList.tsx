import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {statusColor} from '../utils/constant';

type props = {
  title: string;
  status: 'Persiapan' | 'Berlangsung' | 'Selesai';
};

const CardList: React.FC<props> = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          height: 15,
          width: 15,
          backgroundColor: statusColor[props.status] || '#37B5B6',
          borderRadius: 100,
          top: 10,
          left: 10,
        }}
      />
      <View style={styles.titleContainer}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
          }}>
          {props.title || 'Title title title title title'}
        </Text>
        <View style={{position: 'absolute', bottom: 5}}>
          <Text>{props.status || 'Persiapan'}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text>Rp.4000.000</Text>
        <Text numberOfLines={2}>8 Bulan</Text>
      </View>
      <View style={styles.groupCount}>
        <Icon name="users" type="feather" />
        <Text style={{fontSize: 20}}>47/60</Text>
      </View>
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {
    height: 80,
    elevation: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    gap: 4,
  },
  groupCount: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  titleContainer: {
    justifyContent: 'center',
  },
  infoContainer: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
