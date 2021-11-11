import {ADD_CART, REMOVE_CART} from '../constants';

const INITIAL_STATE = {
  cart: [],
};

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `REDUCER/${ADD_CART}`:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case `REDUCER/${REMOVE_CART}`:
      return {
        ...state,
        cart: state.cart.filter(item => item.id != action.payload.id),
      };
    default:
      return state;
  }
}
