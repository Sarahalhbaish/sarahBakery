
import './App.css';
import storeimg from "./Bakery.webp";
import products from './products';

function App() {
  return (
    <div className="App">
       <h1>Sarah's Bakery</h1>
        <h3>Soft and Sweet</h3>
        <img className='Storeimg' src={storeimg} alt='bakery'/>
        <div className='Product'>
          <div>
          <img src={products[0].image} alt={products[0].name} />
          <h3>{products[0].name}</h3>
          <h6>{products[0].price}</h6>
          </div>
          <div>
          <img src={products[1].image} alt={products[1].name} />
          <h3>{products[1].name}</h3>
          <h6>{products[1].price}</h6>
          </div>
        </div>
    </div>
  );
}

export default App;
