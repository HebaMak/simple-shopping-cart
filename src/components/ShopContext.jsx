import {useEffect , createContext , useReducer , useContext} from 'react'
import shopReducer, { initialState } from './ShopReducer'


const ShopContext = createContext(initialState)

export const ShopProvider = ({children}) => {

    const [state , dispatch] =  useReducer(shopReducer, initialState) 

    //add product to cart
    const addToCart = product => {
      const updatedCart = state.products.concat(product)
      updatePrice(updatedCart)
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          products: updatedCart
        }
      })
    }

    //remove product from cart
    const removeFromCart = product => {
      const updatedCart = state.products.filter(
        currentProduct => currentProduct.id !== product.id
      )
      updatePrice(updatedCart)
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: {
          products: updatedCart
        }
      })
    }

    //update price
    const updatePrice = products => {
      let total = 0
      products.forEach(product => total += product.price)
      dispatch({
        type: "UPDATE_PRICE",
        payload: {
          total
        }
      })
    }

  useEffect(() => {
    localStorage.setItem('products' , JSON.stringify(state.products))
    localStorage.setItem('total' , JSON.stringify(state.total))
  }, [state.products , state.total])

  // useEffect(() => {
  //   localStorage.setItem('total' , JSON.stringify(state.total))
  // }, [state.total])

  const value = {
    addToCart,
    removeFromCart,
    products: state.products,
    total: state.total
  }

 

  return (
    <ShopContext.Provider  value={value}>
      {children}
    </ShopContext.Provider>
  )
}

const useShop = () => {
  const context = useContext(ShopContext)
  if(context === undefined) {
    throw new Error('useShop must be used within shopContext')
  }
  return context
}


export default useShop