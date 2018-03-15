

/* Check if product already exists in the cart*/
function containsObject(obj, array) {
  var item;
  for (item in array) {
    if (array.hasOwnProperty(item) && array[item] === obj){
      return true
    }
  }
  return false;
}

export default function (state = [], action) {
  switch (action.type) {

    /* Adds selected product as new item in cart */
    case "CARTITEM_SELECTED":

    /* If product is already added to cart then increase the quantity selected product*/
    if(containsObject(action.payload, state) === true){
      var objIndex = state.findIndex(item => item === action.payload);
      console.log(state[objIndex]);
      state[objIndex].qty = state[objIndex].qty + 1;
      return state;
    }

    /* Gives products object quantity element and returns array */
    action.payload.qty = 1;
    return [ ...state, action.payload ];

    /* Removes selected product from cart */
    case "REMOVE_CARTITEM":
      return state.filter(item => item.name !== action.payload);

    /* Increases the quantity of selected product */
    case "INCRESE_QTY":
      let idx = state.findIndex(item => item === action.payload);
      const newState = state.slice();

      const oldItem = state[idx];
      const newItem = {...oldItem};

      newItem.qty++;
      newState[idx] = newItem;

      return newState;

    /* Decreases the quantity of selected product */
    case "DECRESE_QTY":
      idx = state.findIndex(item => item === action.payload);
      if(state[idx].qty > 1){
        const newState = state.slice();

        const oldItem = state[idx];
        const newItem = {...oldItem};

        newItem.qty--;
        newState[idx] = newItem;

        return newState;
      }
      return state;

    default:
      return state
  }
}
