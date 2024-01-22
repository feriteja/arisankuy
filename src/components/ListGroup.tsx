import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import CardList from './CardList';

const ListGroup = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[...Array(30)]}
        scrollEnabled={false}
        renderItem={({item, index}) => (
          <View style={{marginVertical: 3}}>
            <CardList key={index} {...item} />
          </View>
        )}
      />
    </View>
  );
};

export default ListGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'purple',
  },
});
