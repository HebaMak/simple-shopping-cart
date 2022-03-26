export const initialState = {
  total: JSON.parse(localStorage.getItem('total')) || 0 ,
  products: JSON.parse(localStorage.getItem('products')) || []
}

const shopReducer = (state , action) => {
  const {type , payload} = action

  switch(type) {
    case "ADD_TO_CART": return {
      ...state,
      products: payload.products
    }
    case "REMOVE_FROM_CART": return {
      ...state,
      products: payload.products
    }
    case "UPDATE_PRICE": return {
      ...state,
      total: payload.total
    }
    default: 
    throw new Error(`No case for type ${type} found in shopReducer.`)
  }
}

export default shopReducer