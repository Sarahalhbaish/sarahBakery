import React from 'react'
import cakeImg from '../cake.jpg';


const ProductItem = () => {
 

  return (
    <div>
    <img src={cakeImg} alt="cake" />
    <h3>Cake</h3>
    <h6>10 KD</h6>
    </div>
  )
}

export default ProductItem



