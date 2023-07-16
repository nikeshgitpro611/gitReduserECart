import { useState } from 'react'
// import './App.css'
import Navbar from './Navbar';
import CartContainer from './CartContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <Navbar />
    <CartContainer />
   </main>
  )
}

export default App
