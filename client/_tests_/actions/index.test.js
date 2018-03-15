import * as actions from '../../actions/index';

describe('actions', () => {
  it('should create an action to add new cart item', () => {
    const item = {id: 1, name: 'Brown jacket', price: '150'};
    const expectedAction = {
      type: "CARTITEM_SELECTED",
      payload: item
    }
    expect(actions.selectCartItem(item).toEqual(expectedAction))
  })
})
