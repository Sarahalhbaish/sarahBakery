
import './App.css';
import storeimg from "./Bakery.webp";
import ProductItem from './Components/ProductItem';
// import cakeImg from './cake.jpg';
// import pastriesImg from './pastries.jpeg';

function App() {
//   const products = [
//     {
//         name: "cake",
//         price: "10 KD",
//         image: cakeImg
//     },
//     {
//         name: "pastries",
//         price: "5 KD",
//         image: pastriesImg
//     }
// ];

  // const ProductList = products.map((product, index) => (
  //     ));

  return (
    <div className="App">
       <h1>Sarah's Bakery</h1>
        <h3>Soft and Sweet</h3>
        <img className='Storeimg' src={storeimg} alt='bakery'/>
        <div className="ProductList">
        <ProductItem/>
      </div>
    </div>
  );
}

export default App;
