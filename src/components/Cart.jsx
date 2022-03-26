import ProductCard from "./ProductCard"
import useShop from "./ShopContext"

const Cart = () => {
  const{products , total} = useShop()
  
  return (
    <div className='container cart'>
      <p className='title'> Your cart total is {total}$</p>
      <div className="productsWrapper">
      {
        products.map((product, index) => (
          <ProductCard key={index} {...product}/>
        ))
      }
      </div>
    </div>
  )
}

export default Cart
