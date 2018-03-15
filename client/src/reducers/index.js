/* Combining all redurcers into one object */

import { combineReducers } from 'redux';
import NewCartItemsReducer from './reducer-newCartItem';

const allReducers = combineReducers({
  newCartItems: NewCartItemsReducer
});

export default allReducers
