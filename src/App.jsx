import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import ProductCard from './Components/ProductCard'
import CartPage from './Components/CartPage'


function App() {

  return (
    // <ProductCard />
    <>
    <Navbar/>
      <Routes>
        <Route index element={<ProductCard />} />
        <Route path='/cart' element={<CartPage/>} />
      </Routes>
    </>
  )
}
export default App
