import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../Redux/Actions/ProductActions";
import Card from "./Cards";
const Products = () => {
  const dispatch = useDispatch();
  const getProducts = () => {
    axios("https://fakestoreapi.com/products")
      .then((respons) => {
        dispatch(setProducts(respons.data));
      })
      .catch((err) => {
        alert(err);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="w-[95%] mx-auto ">
      <Card />
    </div>
  );
};

export default Products;
