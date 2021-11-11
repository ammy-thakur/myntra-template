import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import s from '../../assets/Style/style';
import {goBack, navigate} from '../../route/navigationService';

const logo = require('../../assets/Images/myntra-logo.png');
const menu = require('../../assets/Images/menu.png');
const search = require('../../assets/Images/search.png');
const notification = require('../../assets/Images/notification.png');
const heart = require('../../assets/Images/heart.png');
const bag = require('../../assets/Images/shopping-bag.png');
const back = require('../../assets/Images/back.png');

const Header = ({
  isBack = true,
  title,
  subtitle,
  rightJsx,
  isHomeHeader,
  headerStyle = {},
  titleJsx,
  isNotify,
  disableBack = false,
}) => {
  const {cart} = useSelector(store => {
    return store;
  });
  return (
    <View style={[styles.header, headerStyle]}>
      <View style={[s.col, s.rowrow, s.alignItems]}>
        {isHomeHeader ? (
          <>
            <Image
              source={menu}
              resizeMode="contain"
              style={{width: 23, height: 23, marginRight: 10}}
            />
            <Image
              source={logo}
              resizeMode="contain"
              style={{width: 27, height: 27}}
            />
            <View style={{paddingLeft: 3}}>
              <Text style={{fontSize: 9, color: '#000000'}}>Become</Text>
              <Text
                style={{fontSize: 11, color: '#f0a53e', fontWeight: 'bold'}}>
                INSIDER
              </Text>
            </View>
          </>
        ) : (
          <>
            <TouchableOpacity
              activeOpacity={1}
              hitSlop={{left: 15, right: 15, top: 15, bottom: 15}}
              onPress={() => {
                !disableBack && goBack();
              }}>
              <Image
                source={back}
                resizeMode="contain"
                style={{width: 20, height: 20, marginRight: 10}}
              />
            </TouchableOpacity>
            <View>
              {title ? (
                <Text
                  style={[
                    {
                      letterSpacing: 0.5,
                      fontSize: 15,
                      fontWeight: '500',
                      color: '#000000',
                    },
                  ]}
                  numberOfLines={1}>
                  {title}
                </Text>
              ) : null}
              {subtitle ? (
                <Text
                  style={[
                    {
                      letterSpacing: 0.5,
                      fontSize: 11,
                      color: '#999999',
                      marginTop: 3,
                    },
                  ]}>
                  {subtitle}
                </Text>
              ) : null}
            </View>
          </>
        )}
      </View>
      <View style={[s.col, s.rowrow, s.justifyContentRight, s.alignItems]}>
        {!rightJsx ? (
          <>
            <TouchableOpacity
              activeOpacity={1}
              style={{padding: 7, marginRight: 5}}>
              <Image
                source={search}
                resizeMode="contain"
                style={{width: 18, height: 18}}
              />
            </TouchableOpacity>
            {isNotify ? (
              <TouchableOpacity
                activeOpacity={1}
                style={{padding: 7, marginRight: 5}}>
                <Image
                  source={notification}
                  resizeMode="contain"
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity
              activeOpacity={1}
              style={{padding: 7, marginRight: 5}}>
              <Image
                source={heart}
                resizeMode="contain"
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={{padding: 7}}
              onPress={() => navigate('Cart')}>
              {cart.length > 0 ? (
                <View
                  style={[
                    s.alignItems,
                    s.justifyContentCenter,
                    {
                      width: 20,
                      height: 20,
                      borderRadius: 30,
                      backgroundColor: '#ff3e6c',
                      position: 'absolute',
                      right: -5,
                      top: -5,
                    },
                  ]}>
                  <Text style={{fontSize: 11, color: '#000'}}>
                    {cart.length}
                  </Text>
                </View>
              ) : null}
              <Image
                source={bag}
                resizeMode="contain"
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
          </>
        ) : (
          rightJsx
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingBottom: 10,
    backgroundColor: '#ffffff',
    borderBottomColor: '#dfdfdf',
    borderBottomWidth: 0.5,
  },
});

export default Header;
