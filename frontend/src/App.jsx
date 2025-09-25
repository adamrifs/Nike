import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ProductListing from "./pages/ProductListing"
import ProductDetail from "./pages/ProductDetail"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route path='/productDetail' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
