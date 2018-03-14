/* Combining all redurcers into one object */

import { combineReducers } from 'redux';
import CartItemsReducer from './reducer-cartitems';

const allReducers = combineReducers({
  cartItems: CartItemsReducer
});

export default allReducers
