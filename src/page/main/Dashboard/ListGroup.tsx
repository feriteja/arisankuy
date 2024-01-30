import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CardList from '../../../components/CardList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {DashBoardStackParamList} from '../../../router/Main/Dashboard/DashboardRoute';

type dummyDataType = {
  id: string;
  text: string;
  title: string;
  status: 'Persiapan' | 'Berlangsung' | 'Selesai';
}[];

// type props = {
//   navigation: NativeStackNavigationProp<
//     DashBoardStackParamList,
//     'dashboard',
//     undefined
//   >;
// };

const ListGroup: React.FC<any> = ({navigation}) => {
  const dummyData: dummyDataType = Array.from({length: 20}, (_, index) => ({
    id: index.toString(),
    text: `Item ${index + 1}`,
    title: 'Dummy Dummy Dummy Dummy Dummy Dummy Dummy ',
    status: 'Berlangsung',
  }));

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        scrollEnabled={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <View
            style={{
              marginVertical: 3,
              marginHorizontal: 10,
              backgroundColor: '#fff',
            }}>
            <CardList
              key={index}
              status={item.status}
              title={item.title}
              onPress={() =>
                navigation.push('detailGroup', {
                  groupId: item.id,
                  groupName: item.title,
                })
              }
            />
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
