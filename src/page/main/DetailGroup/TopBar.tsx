import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '@rneui/themed';
import {statusColor} from '../../../utils/constant';

type props = {
  navigation: any;
  groupName: string;
};

const TopBar: React.FC<props> = ({navigation, groupName}) => {
  const [ShowGroup, setShowGroup] = useState(false);

  return (
    <View style={{zIndex: 10}}>
      <View style={styles.topBar}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
          }}>
          <Icon
            onPress={() => navigation.pop()}
            style={styles.backIcon}
            name="arrow-left"
            type="feather"
            color="#fff"
          />
          <View style={styles.avatarPicture} />
          <View style={{flex: 1}}>
            <Text
              style={styles.topBarTitle}
              numberOfLines={1}
              lineBreakMode="tail">
              {groupName}
            </Text>
            <Text style={styles.topBarSubTitle}>36/47 Periode</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: 5,
          }}>
          <Icon
            onPress={() => setShowGroup(prev => !prev)}
            size={30}
            style={styles.backIcon}
            color="#fff"
            name="groups"
            type="materialicons"
          />
          <Icon
            size={30}
            style={styles.backIcon}
            color="#fff"
            name="menu"
            type="materialicons"
          />
        </View>
      </View>
      {ShowGroup && (
        <View style={styles.groupList}>
          <Icon
            style={styles.backIcon}
            name="whatsapp"
            type="fontisto"
            color="#25d366"
          />
          <Icon
            style={styles.backIcon}
            name="line"
            type="fontisto"
            color="#00c300"
          />
          <Icon
            style={styles.backIcon}
            name="telegram"
            type="fontisto"
            color="#0088cc"
          />
        </View>
      )}
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    elevation: 1,
    backgroundColor: statusColor.Berlangsung,
    justifyContent: 'space-between',
    paddingRight: 10,
    maxHeight: 62,
  },
  topBarTitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  topBarSubTitle: {
    color: '#fff',
  },
  avatarPicture: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  backIcon: {
    paddingHorizontal: 5,
  },
  groupList: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 62,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderColor: statusColor.Berlangsung,
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    elevation: 1,
    zIndex: 100,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
});
