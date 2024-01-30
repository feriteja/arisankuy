import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TopBar from './TopBar';
import UserCard from './UserCard';

// type navProps = NativeStackScreenProps<DashBoardStackParamList, 'detailGroup'>;

const DetailGroup: React.FC<any> = ({route, navigation}) => {
  const {groupId, groupName} = route.params;
  return (
    <View style={styles.container}>
      <TopBar groupName={groupName} navigation={navigation} />

      <FlatList
        data={[...Array(47).keys()]}
        keyExtractor={item => item.toString()}
        renderItem={({item, index}) => <UserCard />}
      />
    </View>
  );
};

export default DetailGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
