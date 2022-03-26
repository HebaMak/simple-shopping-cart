import {useState, useEffect } from 'react'
import useShop from './ShopContext'

const ProductCard = ({id , name , price , imageUrl}) => {
  const {addToCart , removeFromCart , products} = useShop()
  const [isInCart , setIsInCart] = useState(false)
  
  useEffect(()=> {
    const productIsInCart = products.find(product => product.id === id)

    if(productIsInCart) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  },[products , id])

  const addRemoveHandler =() => {
    const product = {id , name , price , imageUrl}

    if(isInCart) {
      removeFromCart(product)
    } else {
      addToCart(product)
    }
  }

  return (
    <div className="product">
      <img src={imageUrl} alt="product img" />
      <span 
        className={`addButton ${isInCart ? 'red': '' }`}
        onClick={addRemoveHandler}
        > {isInCart ? "-" : "+"} </span>
      <div className="details">
        <h4 className='title'>{name}</h4>
        <span className='price'>price: {price}.00$</span>
      </div>
    </div>
  )
}

export default ProductCard
