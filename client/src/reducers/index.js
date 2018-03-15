/* Combining all redurcers into one object */

import { combineReducers } from 'redux';
import CartItemsReducer from './reducer-cartitems';
import NewCartItemsReducer from './reducer-newCartItem';

const allReducers = combineReducers({
  cartItems: CartItemsReducer,
  newCartItems: NewCartItemsReducer
});

export default allReducers
