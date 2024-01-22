import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ListGroup from '../../../components/ListGroup';
import Summary from './Summary';

const Dashboard = ({navigation}: any) => {
  return (
    <ScrollView style={styles.container}>
      <Summary />
      <ListGroup />
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
