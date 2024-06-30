import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { removeProduct, selectProduct } from "../Redux/Actions/ProductActions";
import ProductTemplate from "./ProductTemplate";
const ProductDetail = () => {
  const productId = useParams();
  const dispatch = useDispatch();
  const fetchProductDetail = () => {
    if (
      productId.id === "" ||
      productId.id === undefined ||
      productId.id === null
    ) {
      return;
    }
    axios(`https://fakestoreapi.com/products/${productId.id}`)
      .then((response) => {
        dispatch(selectProduct(response.data));
      })
      .catch((error) => {
        alert(`something went wrong`, error);
      });
  };
  useEffect(() => {
    fetchProductDetail();
    return () => {
      dispatch(removeProduct());
    };
  }, []);
  return (
    <div className="grid place-items-center text-5xl font-bold h-96">
      <ProductTemplate />
    </div>
  );
};

export default ProductDetail;
