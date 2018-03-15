

export const selectCartItem = (item) => {
  return {
    type: "CARTITEM_SELECTED",
    payload: item
  }
};

export const removeCartItem = (item) => {
  return {
    type: "REMOVE_CARTITEM",
    payload: item.name
  }
};

export const increaseQty = (item) => {
  return {
    type: "INCRESE_QTY",
    payload: item
  }
};

export const decreaseQty = (item) => {
  return {
    type: "DECRESE_QTY",
    payload: item
  }
};
