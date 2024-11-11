
import './App.css';
import storeimg from "./Bakery.webp";
import ProductItem from './Components/ProductItem';
import products from "./products"

function App() {
  const ProductList = products.map((product, index) => (
     <ProductItem/>
      ));

  return (
    <div className="App">
       <h1>Sarah's Bakery</h1>
        <h3>Soft and Sweet</h3>
        <img className='Storeimg' src={storeimg} alt='bakery'/>
        <div className="ProductList">
        {ProductList}
      </div>
    </div>
  );
}

export default App;
