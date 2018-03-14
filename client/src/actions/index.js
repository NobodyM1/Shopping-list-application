
export const selectCartItem = (item) => {
  console.log("You clicked on item: ", item.name);
  return {
    type: "CARTITEM_SELECTED",
    payload: item
  }
};
