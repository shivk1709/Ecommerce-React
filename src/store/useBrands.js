import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "./BrandSlice";

export const useBrands = () => {
  const dispatch = useDispatch();
  const { brands, loading, error, successfulOnSave } = useSelector(
    (store) => store.brands
  );

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  return { brands, loading, error, successfulOnSave };
};
