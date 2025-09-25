import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ProductListing from "./pages/ProductListing"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productListing" element={<ProductListing />} />
      </Routes>
    </div>
  )
}

export default App
