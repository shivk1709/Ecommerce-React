import { useEffect } from "react";
import { fetchproducts } from "./CategorySlice";
import { useDispatch, useSelector } from "react-redux";

export const useCategory = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch]);

  return { categories, loading, error };
};
