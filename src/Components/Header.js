import storeimg from "../Bakery.webp";
import React, { useState } from 'react'; 

const Header = () => {
    const [totalVisitor, visitor] = useState(0);
    const visitorClick= () => {
    visitor(totalVisitor + 1); 
    }
  return (
    <div>
    <h1>Sarah's Bakery</h1>
    <h3>Soft and Sweet</h3>
    <div className="Page">
      <h2>Visitor Count: {totalVisitor}</h2>  
      <button onClick={visitorClick}>Increase Visitors</button> 
      </div>
    <img className='Storeimg' src={storeimg} alt='bakery'/>
    </div>
  )
}

export default Header