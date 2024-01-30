import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ListGroup from './ListGroup';
import Summary from './Summary';

// type navProps = NativeStackScreenProps<DashBoardStackParamList, 'dashboard'>;

const Dashboard: React.FC<any> = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Summary />
      <ListGroup navigation={navigation} />
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
