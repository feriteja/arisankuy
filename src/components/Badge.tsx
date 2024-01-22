import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {statusColor} from '../utils/constant';

type props = {
  status: 'Persiapan' | 'Berlangsung' | 'Selesai';
  number?: number;
  numberColor?: string;
};

const Badge: React.FC<props> = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 15,
          width: 15,
          backgroundColor: statusColor[props.status] || '#37B5B6',
          borderRadius: 100,
        }}
      />
      <Text style={{color: props.numberColor, fontSize: 18, fontWeight: '700'}}>
        {props.number}
      </Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});
