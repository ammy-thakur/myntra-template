import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const DEVICE_HEIGTH = height;
export const DEVICE_WIDTH = width;
export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';

const c1 = require('../assets/Images/c1.webp');
const c2 = require('../assets/Images/c2.webp');
const c3 = require('../assets/Images/c3.webp');
const c4 = require('../assets/Images/c4.webp');
const c5 = require('../assets/Images/c5.webp');
const c6 = require('../assets/Images/c6.webp');
const c7 = require('../assets/Images/c7.webp');
const c8 = require('../assets/Images/c8.webp');

const fb1 = require('../assets/Images/fb1.webp');
const fb2 = require('../assets/Images/fb2.webp');
const fb3 = require('../assets/Images/fb3.webp');
const fb4 = require('../assets/Images/fb4.webp');

export const CATEGORY = [
  {id: 1, image: c1},
  {id: 2, image: c2},
  {id: 3, image: c3},
  {id: 4, image: c4},
  {id: 5, image: c5},
  {id: 6, image: c6},
  {id: 7, image: c7},
  {id: 8, image: c8},
];

export const FEATURED_BRAND = [
  {id: 1, image: fb1},
  {id: 2, image: fb2},
  {id: 3, image: fb3},
  {id: 4, image: fb4},
];

export const ITEM_LISTING = [
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave ',
    price: 168,
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: 'White Gold Plated Princess',
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    price: 10.99,
    description:
      'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 10,
    title: 'Solid Gold Petite Micropave ',
    price: 168,
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
];
