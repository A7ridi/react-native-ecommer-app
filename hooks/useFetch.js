import { useState, useEffect } from "react";
import { BASE_URL } from "../utility/constants";
import axios from "axios";

const useFetch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError("Something went wrong!!!");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    fetchProducts,
  };
};

export default useFetch;
