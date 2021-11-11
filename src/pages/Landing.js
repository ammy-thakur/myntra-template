import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Layout from '../common/Layout';
import s from '../assets/Style//style';
import {
  CATEGORY,
  DEVICE_HEIGTH,
  DEVICE_WIDTH,
  FEATURED_BRAND,
} from '../constants';
import {navigate} from '../route/navigationService';

const b1 = require('../assets/Images/b1.webp');
const b2 = require('../assets/Images/b2.webp');
const b3 = require('../assets/Images/b3.webp');

const Landing = () => {
  return (
    <Layout
      isBack={false}
      isHomeHeader={true}
      isNotify={true}
      isSafeArea={true}
      layoutStyle={{backgroundColor: '#ffffff'}}>
      <ScrollView
        style={[s.flex1, {backgroundColor: '#f8f8f8', marginBottom: 30}]}
        showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={[
            {paddingTop: 10, paddingBottom: 10, backgroundColor: '#ffffff'},
          ]}>
          {CATEGORY.map((item, i) => {
            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={1}
                onPress={() => navigate('Listing')}
                style={{marginLeft: 8, marginRight: 7}}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{
                    width: DEVICE_WIDTH / 5 - 10,
                    height: DEVICE_WIDTH / 5,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <View style={[s.flex1]}>
          <View style={[s.rowdir]}>
            <Image
              source={b1}
              resizeMode="contain"
              style={{width: DEVICE_WIDTH / 2, height: DEVICE_HEIGTH / 3 + 50}}
            />
            <Image
              source={b2}
              resizeMode="contain"
              style={{width: DEVICE_WIDTH / 2, height: DEVICE_HEIGTH / 3 + 50}}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '200',
                color: '#000000',
                marginLeft: 20,
              }}>
              12PM To 4PM
            </Text>
            <Image
              source={b3}
              resizeMode="contain"
              style={{width: DEVICE_WIDTH, height: DEVICE_HEIGTH / 3}}
            />
          </View>
          <View
            style={{
              paddingTop: 15,
              paddingBottom: 15,
              backgroundColor: '#ffffff',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '300',
                color: '#000000',
                margin: 20,
                marginTop: 0,
              }}>
              FEATURED BRAND
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {FEATURED_BRAND.map((item, i) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    activeOpacity={1}
                    style={{
                      marginLeft: 8,
                      marginRight: 7,
                      borderWidth: 1,
                      borderColor: '#ddd',
                    }}>
                    <Image
                      source={item.image}
                      resizeMode="contain"
                      style={{
                        width: DEVICE_WIDTH / 2 - 10,
                        height: DEVICE_WIDTH / 2 + 50,
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Landing;
