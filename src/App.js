
import './App.css';
import storeimg from "./Bakery.webp";
import products from './products';

function App() {
  return (
    <div className="App">
       <h1>Sarah's Bakery</h1>
        <h3>Soft and Sweet</h3>
        <img className='Storeimg' src={storeimg} alt='bakery'/>
        <div className="ProductList">
        {products.map((product, index) => (
          <div key={index} className="Product"> 
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <h6>{product.price}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
