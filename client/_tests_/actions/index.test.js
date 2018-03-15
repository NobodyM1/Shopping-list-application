import * as actions from '../../src/actions/index';

describe('actions', () => {
  it('should create an action to add new cart item', () => {
    const item = {id: 1, name: 'Brown jacket', price: '150'};
    const expectedAction = {
      type: "CARTITEM_SELECTED",
      payload: item
    }
    expect(actions.selectCartItem(item)).toEqual(expectedAction)
  })
  it('should create an action to remove cart item', () => {
    const item = {name: 'Brown jacket'};
    const expectedAction = {
      type: "REMOVE_CARTITEM",
      payload: item.name
    }
    expect(actions.removeCartItem(item)).toEqual(expectedAction)
  })
  it('should create an action to increase quantity of cart item', () => {
    const item = {name: 'Brown jacket', qty: 1};
    const expectedAction = {
      type: "INCRESE_QTY",
      payload: item
    }
    expect(actions.increaseQty(item)).toEqual(expectedAction)
  })
  it('should create an action to decrease quantity of cart item', () => {
    const item = {name: 'Brown jacket', qty: 2};
    const expectedAction = {
      type: "DECRESE_QTY",
      payload: item
    }
    expect(actions.decreaseQty(item)).toEqual(expectedAction)
  })
})
