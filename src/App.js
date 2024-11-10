
import './App.css';
import storeimg from "./Bakery.webp"
function App() {
  return (
    <div className="App">
       <h1>Sarah's Bakery</h1>
        <h3>Soft and Sweet</h3>
        <img className='storeimg' src={storeimg} alt='bakery'/>
    </div>
  );
}

export default App;
