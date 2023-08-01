import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utility/constants";

const useSearch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchProducts = async (searchKey = "") => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/search/${searchKey}`);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError("Something went wrong!!!");
      setLoading(false);
    }
  };
  return {
    searchProducts,
    products,
    loading,
    error,
  };
};

export default useSearch;
