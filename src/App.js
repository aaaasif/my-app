import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:'phone', price:'30000'},
    {name:'camera', price:'53000'},
    {name:'Laptop', price:'130000'},
    {name:'Mac-Book', price:'230000'},
    {name:'HearPhone', price:'6000'},
    {name:'Watch', price:'45000'},
  ]
}

function Product(props) {
  const productStyle ={
    border: '2px solid blue'
  }
  return (
    <div className='product' style='productStyle'>
      <h2>name: {props.name}</h2>
      <h4>price: {props.price}</h4>
    </div>
  )
}

export default App;
