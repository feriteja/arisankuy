import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from '@rneui/themed';

type props = {
  rating: number;
  size?: number;
  color?: string;
};

export const StarRating: React.FC<props> = ({rating, size, color}) => {
  const filledStars = Array.from({length: rating}).fill('star');
  const emptyStars = Array.from({length: 5 - rating}).fill('star-o');

  return (
    <View style={{flexDirection: 'row'}}>
      {filledStars.map((type, index) => (
        <Icon
          size={size}
          key={index}
          name="star"
          type="antdesign"
          color={color || '#8d32bb'}
        />
      ))}
      {emptyStars.map((type, index) => (
        <Icon
          size={size}
          key={index}
          name="staro"
          type="antdesign"
          color="black"
        />
      ))}
    </View>
  );
};
