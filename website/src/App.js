import "./App.css";
import Home from "../src/pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import AllProducts from "./pages/allproducts/AllProducts";
import SingleProduct from "./pages/single product/SingleProduct";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
       < Route path="/login" element={<Login />} />
       <Route path="/products" element={<AllProducts />} />
       <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
