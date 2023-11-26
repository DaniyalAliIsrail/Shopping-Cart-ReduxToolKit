import { useSelector } from 'react-redux'
import './App.css'
import Navbar from './Components/Navbar'
import ProductCard from './Components/ProductCard'


function App() {
  const item = useSelector((state)=>{
    console.log(state.allcarts);
  })
  return (
    <>
    <Navbar/>
    <ProductCard/>
    </>
  )
}
export default App
