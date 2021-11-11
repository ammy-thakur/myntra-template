import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {color} from 'react-native-reanimated';
import s from '../../assets/Style/style';

const logo = require('../../assets/Images/myntra-logo.png');
const category = require('../../assets/Images/category.png');
const studio = require('../../assets/Images/studio.png');
const search = require('../../assets/Images/search.png');
const user = require('../../assets/Images/user.png');

let Tabs = [
  {id: 1, name: 'Home', icon: logo, width: 23, height: 23},
  {id: 2, name: 'Categories', icon: category, width: 20, height: 20},
  {id: 3, name: 'Studio', icon: studio, width: 23, height: 23},
  {id: 4, name: 'Explore', icon: search, width: 20, height: 20},
  {id: 5, name: 'Profile', icon: user, width: 23, height: 23},
];

const BottomTabs = () => {
  return (
    <View style={[s.rowdir, s.alignItems, styles.tabContainer]}>
      {Tabs.map((item, i) => {
        return (
          <TouchableOpacity
            activeOpacity={1}
            key={item.id}
            style={[s.col, s.flex1, {padding: 5, paddingBottom: 15}]}>
            <View style={[s.rowrow, s.justifyContentCenter, {marginBottom: 5}]}>
              <Image
                source={item.icon}
                resizeMode="contain"
                style={{width: item.width, height: item.height}}
              />
            </View>
            <Text
              style={[
                styles.tabLable,
                {color: item.id === 1 ? '#ff3f6c' : '#000000'},
              ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 66,
    backgroundColor: '#ffffff',
    elevation: 0,
    shadowOpacity: 0.09,
  },
  tabLable: {
    fontSize: 11,
    textAlign: 'center',
  },
});

export default BottomTabs;
