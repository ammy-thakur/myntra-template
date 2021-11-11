import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Layout from '../common/Layout';
import s from '../assets/Style//style';
import {DEVICE_HEIGTH, DEVICE_WIDTH, ITEM_LISTING} from '../constants';
import {color} from 'react-native-reanimated';
import {goBack, navigate} from '../route/navigationService';
import {useDispatch, useSelector} from 'react-redux';

const back = require('../assets/Images/back.png');
const heart = require('../assets/Images/heart.png');
const bag = require('../assets/Images/shopping-bag.png');
const bag_white = require('../assets/Images/shopping-bag_white.png');
const star = require('../assets/Images/star.png');

const Details = ({route: {params}}) => {
  const praductDetails = params.praductDetails;

  const dispatch = useDispatch();

  const {cart} = useSelector(store => {
    return store;
  });

  const [isAdded, setAdded] = useState(false);

  useEffect(() => {
    const allReadyAdded = cart.find(item => item.id === praductDetails.id);
    if (allReadyAdded && Object.keys(allReadyAdded).length > 0) {
      setAdded(true);
    } else {
      setAdded(false);
    }
  }, [cart]);

  const addToCart = product => {
    dispatch({
      type: 'REDUCER/ADD_CART',
      payload: {
        ...product,
      },
    });
  };

  return (
    <Layout
      isSafeArea={true}
      noHeader={true}
      isBottomNaigation={false}
      layoutStyle={{backgroundColor: '#f8f8f8'}}>
      <View
        style={[
          s.rowdir,
          s.alignItems,
          {padding: 15, position: 'absolute', top: 0, zIndex: 1},
        ]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => goBack()}
          style={[
            s.alignItems,
            s.justifyContentCenter,
            {
              width: 40,
              height: 40,
              borderRadius: 30,
              backgroundColor: 'rgba(230, 230, 230, 0.8)',
            },
          ]}>
          <Image
            source={back}
            resizeMode="contain"
            style={{width: 22, height: 22}}
          />
        </TouchableOpacity>
        <View style={[s.rowrow, s.col, s.justifyContentRight]}>
          <TouchableOpacity
            activeOpacity={1}
            style={[
              s.alignItems,
              s.justifyContentCenter,
              {
                width: 40,
                height: 40,
                borderRadius: 30,
                marginRight: 10,
                backgroundColor: 'rgba(230, 230, 230, 0.8)',
              },
            ]}>
            <Image
              source={back}
              resizeMode="contain"
              style={{width: 22, height: 22}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={[
              s.alignItems,
              s.justifyContentCenter,
              {
                width: 40,
                height: 40,
                marginRight: 10,
                borderRadius: 30,
                backgroundColor: 'rgba(230, 230, 230, 0.8)',
              },
            ]}>
            <Image
              source={heart}
              resizeMode="contain"
              style={{width: 22, height: 22}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigate('Cart')}
            style={[
              s.alignItems,
              s.justifyContentCenter,
              {
                width: 40,
                height: 40,
                borderRadius: 30,
                backgroundColor: 'rgba(230, 230, 230, 0.8)',
              },
            ]}>
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
                <Text style={{fontSize: 11, color: '#000'}}>{cart.length}</Text>
              </View>
            ) : null}
            <Image
              source={bag}
              resizeMode="contain"
              style={{width: 22, height: 22}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 50}}>
        <View
          style={{height: DEVICE_HEIGTH / 2 + 150, backgroundColor: '#ffffff'}}>
          <ImageBackground
            source={{uri: praductDetails?.image}}
            resizeMode="contain"
            style={[
              s.alignItemsBottom,
              s.justifyContentRight,
              {aspectRatio: 3 / 4, width: DEVICE_WIDTH, padding: 10},
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
                {praductDetails?.rating?.rate}
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
              {praductDetails?.rating?.count ? (
                <View
                  style={{
                    borderLeftWidth: 1,
                    borderLeftColor: '#fff',
                    paddingLeft: 5,
                  }}>
                  <Text style={[styles.desc, {color: '#000'}]}>
                    {praductDetails?.rating?.count}
                  </Text>
                </View>
              ) : null}
            </View>
          </ImageBackground>
        </View>
        <View style={{padding: 15, paddingBottom: 5}}>
          <Text style={[styles.title]}>{praductDetails?.title}</Text>
          <Text style={[styles.desc]}>{praductDetails?.category}</Text>
          <Text style={[styles.desc, {color: '#000', fontSize: 20}]}>
            <Text style={{fontSize: 20, letterSpacing: 3}}>&#8377;</Text>
            {praductDetails?.price}
          </Text>
          <Text style={[styles.desc, {color: '#03a685'}]}>
            inclusive of all taxes
          </Text>
        </View>
        <View style={{padding: 15, backgroundColor: '#fff'}}>
          <Text style={[styles.title, {fontSize: 15}]}>
            Easy 15 days returns and exchanges
          </Text>
          <Text style={[styles.desc, {fontSize: 15}]}>
            Choose to return or exchange for a different size (if available)
            within 15 days.
          </Text>
        </View>
      </ScrollView>
      <View
        style={[
          s.rowdir,
          s.alignItems,
          {
            padding: 15,
            paddingTop: 5,
            paddingBottom: 5,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            backgroundColor: '#ffffff',
          },
        ]}>
        <View style={[s.col, {paddingRight: 5}]}>
          <TouchableOpacity
            activeOpacity={1}
            style={[
              s.btnBorder,
              s.rowrow,
              s.alignItems,
              s.justifyContentCenter,
            ]}>
            <Image
              source={heart}
              resizeMode="contain"
              style={{width: 20, height: 20, opacity: 0.3, marginRight: 10}}
            />
            <Text style={{fontSize: 16, fontWeight: '600', color: '#333'}}>
              WISHLIST
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[s.col, {paddingLeft: 5}]}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() =>
              isAdded ? navigate('Cart') : addToCart(praductDetails)
            }
            style={[s.btnFill, s.rowrow, s.alignItems, s.justifyContentCenter]}>
            <Image
              source={bag_white}
              resizeMode="contain"
              style={{width: 20, height: 20, marginRight: 10}}
            />
            <Text style={{fontSize: 16, fontWeight: '600', color: '#fff'}}>
              {isAdded ? 'GO TO BAG' : 'ADD TO BAG'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  desc: {
    fontSize: 15,
    color: '#333',
    marginTop: 5,
    marginBottom: 5,
  },
});

export default Details;
