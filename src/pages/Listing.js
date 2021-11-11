import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import Layout from '../common/Layout';
import s from '../assets/Style//style';
import {DEVICE_WIDTH, ITEM_LISTING} from '../constants';
import {color} from 'react-native-reanimated';
import {navigate} from '../route/navigationService';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

const sort = require('../assets/Images/sort.png');
const filter = require('../assets/Images/filter.png');
const star = require('../assets/Images/star.png');
const heart = require('../assets/Images/heart.png');

const Listing = () => {
  return (
    <Layout
      isSafeArea={true}
      isBottomNaigation={false}
      layoutStyle={{backgroundColor: '#ffffff'}}
      title="ETHNIC JEWELLERY"
      subtitle="19949 Items">
      <View style={{paddingBottom: 30}}>
        <FlatList
          data={ITEM_LISTING}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
          renderItem={(data, index) => {
            let item = data.item;
            return (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigate('Details', {praductDetails: item})}
                style={{
                  width: DEVICE_WIDTH / 2,
                  borderBottomWidth: 1,
                  borderColor: '#aaaaaa',
                  borderRightWidth: index % 2 ? 0 : 1,
                }}>
                <ImageBackground
                  source={{uri: item.image}}
                  resizeMode="contain"
                  style={[
                    s.alignItemsTop,
                    s.justifyContentRight,
                    {
                      width: DEVICE_WIDTH / 2 - 2,
                      aspectRatio: 3 / 4,
                      padding: 10,
                    },
                  ]}>
                  <View
                    style={[
                      s.rowrow,
                      s.alignItems,
                      {
                        paddingVertical: 2,
                        paddingHorizontal: 7,
                        borderRadius: 30,
                        backgroundColor: 'rgba(230,230,230, 0.8)',
                      },
                    ]}>
                    <Text style={[styles.desc, {color: '#000'}]}>
                      {item?.rating?.rate}
                    </Text>
                    <Image
                      source={star}
                      resizeMode="contain"
                      style={{
                        width: 10,
                        height: 10,
                        marginLeft: 5,
                        marginRight: 5,
                      }}
                    />
                    {item?.rating?.count ? (
                      <View
                        style={{
                          borderLeftWidth: 1,
                          borderLeftColor: '#fff',
                          paddingLeft: 5,
                        }}>
                        <Text style={[styles.desc, {color: '#000'}]}>
                          {item?.rating?.count}
                        </Text>
                      </View>
                    ) : null}
                  </View>
                </ImageBackground>
                <View style={[s.rowrow, {padding: 10}]}>
                  <View style={[s.col, {paddingRight: 5}]}>
                    <Text style={[styles.title]} numberOfLines={1}>
                      {item?.title}
                    </Text>
                    <Text style={[styles.desc]} numberOfLines={1}>
                      {item?.description}
                    </Text>
                    <Text
                      style={[styles.desc, {color: '#000'}]}
                      numberOfLines={1}>
                      <Text style={{fontSize: 18, letterSpacing: 3}}>
                        &#8377;
                      </Text>
                      {item?.price}
                    </Text>
                  </View>
                  <TouchableOpacity activeOpacity={1}>
                    <Image
                      source={heart}
                      resizeMode="contain"
                      style={{width: 20, height: 20, opacity: 0.5}}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View
        style={[
          s.rowdir,
          s.alignItems,
          {
            padding: 7,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#ffffff',
            borderTopWidth: 0.5,
            borderTopColor: '#ddd',
          },
        ]}>
        <View
          style={[
            s.col,
            s.rowrow,
            s.alignItems,
            s.justifyContentCenter,
            {borderRightWidth: 1, borderRightColor: '#ddd'},
          ]}>
          <Image
            source={sort}
            resizeMode="contain"
            style={{width: 18, height: 18, opacity: 0.3, marginRight: 10}}
          />
          <Text style={{fontSize: 15, fontWeight: '500', color: '#333'}}>
            SORT
          </Text>
        </View>
        <View style={[s.col, s.rowrow, s.alignItems, s.justifyContentCenter]}>
          <Image
            source={filter}
            resizeMode="contain"
            style={{width: 15, height: 15, opacity: 0.3, marginRight: 10}}
          />
          <Text style={{fontSize: 15, fontWeight: '500', color: '#333'}}>
            FILTER
          </Text>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
  },
  desc: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    marginBottom: 5,
  },
});

export default Listing;
