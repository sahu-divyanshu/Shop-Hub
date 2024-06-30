import Products from "./Components/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import NavBar from "./Components/NavBar";
import AddToCard from "./Components/AddToCard";
function App() {
  return (
    <div className="">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Products />} />
          <Route path="/product/:id" exact element={<ProductDetail />} />
          <Route path="/AddToCard" exact element={<AddToCard />} />
          <Route path="/*">404 product not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
