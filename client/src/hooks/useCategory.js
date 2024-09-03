import axios from "axios";
import { useEffect, useState } from "react";

const useCategory = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/category/get-category`
      );
      setCategories(data?.category);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return categories;
};

export default useCategory;
