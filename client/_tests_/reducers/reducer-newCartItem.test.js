import reducer from '../../src/reducers/reducer-newCartItem';

describe('newCartItem reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })
  it('should handle CARTITEM_SELECTED', () => {
    expect(
      reducer([], {
        type: "CARTITEM_SELECTED",
        payload: {name: "product", price: "20"}
      })
    ).toEqual([
      {
        name: 'product',
        price: "20",
        qty: 1
      }
    ])
  })
  it('should handle REMOVE_CARTITEM', () => {
    expect(
      reducer([], {
        type: "REMOVE_CARTITEM",
        payload: {name: "product"}
      })
    ).toEqual([])
  })
})
