import React from 'react'
import '../App.css';
import Header from '../Components/Header';
import ProductItem from '../Components/ProductItem';
import products from "../products";

const MyHome = () => {
    const ProductList = products.map((product, index) => (
         <ProductItem  key={index} myProduct={product}/>
          ));
  return (
    <div className="App">
    <Header/>
     <div className="ProductList">
     {ProductList}
   </div>
 </div>
  )
}

export default MyHome;