import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListGroup from '../Dashboard/ListGroup';
import SearchBar from './SearchBar';
import Gap from '../../../components/Gap';
import SearchList from './SearchList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// type navProps = NativeStackScreenProps<DashBoardStackParamList, 'dashboard'>;

const SearchGroup: React.FC<any> = ({navigation}) => {
  return (
    <ScrollView>
      <SearchBar />
      <Gap height={10} />
      <SearchList navigation={navigation} />
    </ScrollView>
  );
};

export default SearchGroup;

const styles = StyleSheet.create({});
