import React from 'react'
import {Link} from 'react-router-dom'; 
 const Product = ({product}) => {
  console.log(product)
  return (
    <Link>
    <div>
    <img src={`http://localhost:1337${product.attributes.image.data.attributes.url}`} alt=""/>
    </div>
    </Link>
  )
}

export default Product
