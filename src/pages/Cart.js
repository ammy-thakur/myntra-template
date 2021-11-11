import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Layout from '../common/Layout';
import s from '../assets/Style//style';
import {DEVICE_HEIGTH, DEVICE_WIDTH} from '../constants';
import {useDispatch, useSelector} from 'react-redux';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

const heart = require('../assets/Images/heart.png');
const remove = require('../assets/Images/close.png');
const star = require('../assets/Images/star.png');

const Cart = () => {
  const dispatch = useDispatch();
  const {cart} = useSelector(store => {
    return store;
  });

  const removeFromCart = id => {
    dispatch({
      type: 'REDUCER/REMOVE_CART',
      payload: {id},
    });
  };

  return (
    <Layout
      isSafeArea={true}
      isBottomNaigation={false}
      layoutStyle={{backgroundColor: '#ffffff'}}
      title="SHOPPING BAG"
      rightJsx={
        <TouchableOpacity activeOpacity={1}>
          <Image
            source={heart}
            resizeMode="contain"
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      }>
      <View style={[s.flex1, {backgroundColor: '#f8f8f8'}]}>
        <ScrollView style={[s.flex1]}>
          {cart.map((item, i) => {
            return (
              <View
                key={i}
                style={[
                  s.rowdir,
                  {padding: 10, marginBottom: 7, backgroundColor: '#ffffff'},
                ]}>
                <View style={{width: DEVICE_WIDTH / 3 - 20}}>
                  <ImageBackground
                    source={{uri: item.image}}
                    resizeMode="contain"
                    style={[
                      s.alignItemsTop,
                      s.justifyContentRight,
                      {
                        aspectRatio: 3 / 4,
                        backgroundColor: '#f8f8f8',
                        padding: 10,
                      },
                    ]}>
                    <View
                      style={[
                        s.rowrow,
                        s.alignItems,
                        {
                          paddingVertical: 2,
                          paddingHorizontal: 5,
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
                </View>
                <View style={[s.col, {paddingLeft: 10, paddingRight: 10}]}>
                  <Text style={[styles.title]} numberOfLines={1}>
                    {item?.title}
                  </Text>
                  <Text
                    style={[styles.desc, {color: '#000'}]}
                    numberOfLines={1}>
                    {item?.description}
                  </Text>
                  <Text style={[styles.desc]} numberOfLines={1}>
                    {item?.category}
                  </Text>
                  <Text
                    style={[styles.desc, {color: '#000', fontSize: 16}]}
                    numberOfLines={1}>
                    <Text style={{fontSize: 18, letterSpacing: 3}}>
                      &#8377;
                    </Text>
                    {item?.price}
                  </Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => removeFromCart(item.id)}
                  style={[{padding: 5}]}>
                  <Image
                    source={remove}
                    resizeMode="contain"
                    style={{width: 15, height: 15}}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
          {cart.length > 0 ? (
            <View
              style={[
                {padding: 15, marginBottom: 5, backgroundColor: '#ffffff'},
              ]}>
              <View
                style={{
                  padding: 10,
                  paddingLeft: 0,
                  borderBottomWidth: 1,
                  borderBottomColor: '#ddd',
                }}>
                <Text style={[styles.title]}>
                  {`PRICE DETAILS (${cart.length} ${
                    cart.length > 1 ? 'Items' : 'Item'
                  })`}
                </Text>
              </View>
              <View style={[s.rowdir, s.justifyContent, {marginTop: 10}]}>
                <Text style={[styles.desc, {color: '#000', fontSize: 16}]}>
                  Total MRP
                </Text>
                <Text
                  style={[styles.desc, {color: '#000', fontSize: 16}]}
                  numberOfLines={1}>
                  <Text style={{fontSize: 18, letterSpacing: 3}}>&#8377;</Text>
                  710
                </Text>
              </View>
              <View
                style={[
                  s.rowdir,
                  s.justifyContent,
                  {
                    marginTop: 10,
                    paddingBottom: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#ddd',
                  },
                ]}>
                <Text style={[styles.desc, {color: '#000', fontSize: 16}]}>
                  Convenience Fee
                </Text>
                <Text style={[styles.desc, {color: '#03a685', fontSize: 16}]}>
                  FREE
                </Text>
              </View>
              <View style={[s.rowdir, s.justifyContent, {marginTop: 10}]}>
                <Text
                  style={[
                    styles.desc,
                    {color: '#000', fontSize: 16, fontWeight: '600'},
                  ]}>
                  Total Amount
                </Text>
                <Text
                  style={[
                    styles.desc,
                    {color: '#000', fontSize: 16, fontWeight: '600'},
                  ]}>
                  <Text style={{fontSize: 18, letterSpacing: 3}}>&#8377;</Text>
                  710
                </Text>
              </View>
            </View>
          ) : (
            <View
              style={[
                s.flex1,
                s.alignItems,
                s.justifyContentCenter,
                {height: DEVICE_HEIGTH / 2},
              ]}>
              <Text style={{fontSize: 20, fontWeight: '500', color: '#333'}}>
                There is nothing in you bag.
              </Text>
            </View>
          )}
        </ScrollView>
        <View
          style={[
            {
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#ffffff',
              borderTopWidth: 0.5,
              borderTopColor: '#ddd',
              elevation: 0,
              shadowOpacity: 0.09,
            },
          ]}>
          <View style={{padding: 7, backgroundColor: '#ff3e6c11'}}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                color: '#000',
                textAlign: 'center',
              }}>
              {`${1} Item selected for order`}
            </Text>
          </View>
          <View
            style={{
              padding: 15,
              paddingTop: 10,
              paddingBottom: 5,
            }}>
            <TouchableOpacity
              activeOpacity={1}
              style={[s.btnFill, s.rowdir, s.justifyContentCenter]}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#fff',
                  letterSpacing: 0.4,
                }}>
                PLACE ORDER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Cart;

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  desc: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    marginBottom: 5,
  },
});
