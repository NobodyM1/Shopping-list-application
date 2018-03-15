

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

function increaseQty(){

}

export default function (state = [], action) {
  switch (action.type) {
    case "CARTITEM_SELECTED":
    console.log(state);
    if(containsObject(action.payload, state) === true){
      var objIndex = state.findIndex(item => item === action.payload);
      console.log(state[objIndex]);
      state[objIndex].qty = state[objIndex].qty + 1;
      return state;
    }
    action.payload.qty = 1;
    return [ ...state, action.payload ];

    case "REMOVE_CARTITEM":
      return state.filter(item => item.name !== action.payload);

    case "INCRESE_QTY":
      var objIndex = state.findIndex(item => item === action.payload);
      state[objIndex].qty = state[objIndex].qty + 1;
      return state;

    case "DECRESE_QTY":
      var objIndex = state.findIndex(item => item === action.payload);
      if(state[objIndex].qty > 1){
        state[objIndex].qty = state[objIndex].qty - 1;
        return state;
      }
      return state;

    default:
      return state
  }
}
