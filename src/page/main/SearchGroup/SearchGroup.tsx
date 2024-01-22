import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListGroup from '../../../components/ListGroup';
import SearchBar from './SearchBar';
import Gap from '../../../components/Gap';

const SearchGroup = () => {
  return (
    <ScrollView>
      <SearchBar />
      <Gap height={10} />
      <ListGroup />
    </ScrollView>
  );
};

export default SearchGroup;

const styles = StyleSheet.create({});
