import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {statusColor} from '../utils/constant';

type props = {
  title: string;
  status: 'Persiapan' | 'Berlangsung' | 'Selesai';
  onPress: () => void;
};

const CardList: React.FC<props> = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => props.onPress()}>
      <View
        style={{
          ...styles.colorIndicator,
          backgroundColor: statusColor[props.status] || '#37B5B6',
        }}
      />
      <View style={styles.titleContainer}>
        <Text>by: Renata Ayu</Text>
        <Text
          numberOfLines={2}
          lineBreakMode="tail"
          style={{
            fontSize: 16,
            fontWeight: '700',
            color: '#000',
          }}>
          {props.title || 'Title title title title title titletitletitle'}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>Rp.4000.000</Text>
        <Text numberOfLines={2} style={{fontWeight: '600'}}>
          8 Bulan
        </Text>
      </View>
      <View style={styles.groupCount}>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <Icon name="users" type="feather" size={16} />
          <Text style={{fontSize: 15}}>47/60</Text>
        </View>
        <View style={{}}>
          <Text numberOfLines={1} adjustsFontSizeToFit>
            {props.status || 'Persiapan'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {
    // height: 80,
    elevation: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    gap: 4,
    overflow: 'hidden',
  },
  groupCount: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  titleContainer: {
    maxWidth: 200,
    paddingVertical: 10,
    paddingHorizontal: 2,
  },
  infoContainer: {
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  colorIndicator: {
    position: 'absolute',
    height: '100%',
    width: 10,
    opacity: 0.7,
    borderRadius: 100,
  },
});
