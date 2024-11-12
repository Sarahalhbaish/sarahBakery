import React from 'react'

const ProductItem = (props) => {
 

  return (
    <div>
    <img src={props.myProduct.image} alt={props.myProduct.name} />
    <h3>{props.myProduct.name}</h3>
    <h6>{props.myProduct.price}</h6>
    </div>
  )
}

export default ProductItem



