import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
        <Icon style={styles.backIcon} name="arrow-left" type="feather" />
        <View style={styles.searchContainer}>
          <Icon
            style={styles.inputIcon}
            name="search"
            type="feather"
            size={18}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder="Cari Grup Arisanmu"
            onSubmitEditing={() => console.log('test')}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 10,
    padding: 5,
  },
  textInputStyle: {
    padding: 0,
    paddingVertical: 5,
    flex: 1,
  },
  inputIcon: {
    paddingHorizontal: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 7,
    flex: 1,
  },
  backIcon: {
    paddingHorizontal: 10,
  },
});
