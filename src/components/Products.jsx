import ProductCard from './ProductCard'
import {shopData} from './ShopData'

const Products = () => {
  return (
    <div className='container products'>
      <h3 className="title">Welcome to Hapiii colthing shop</h3>
      <div className="productsWrapper">
      {
        shopData.map((data , index)=> (
          <ProductCard key={index} {...data} />
        ))
      }
      </div>
    </div>
  )
}

export default Products