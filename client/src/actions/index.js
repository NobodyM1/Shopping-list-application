
/* Add new cart item */
export const selectCartItem = (item) => {
  return {
    type: "CARTITEM_SELECTED",
    payload: item
  }
};

/* Remove selected cart item */
export const removeCartItem = (item) => {
  return {
    type: "REMOVE_CARTITEM",
    payload: item.name
  }
};

/* Increase quantity of selected item */
export const increaseQty = (item) => {
  return {
    type: "INCRESE_QTY",
    payload: item
  }
};

/* Decrease quantity of selected item */
export const decreaseQty = (item) => {
  return {
    type: "DECRESE_QTY",
    payload: item
  }
};
