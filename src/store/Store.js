import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import BrandSlice from "./BrandSlice";

const Store = configureStore({
    reducer : {
        products : CategorySlice.reducer,
        brands : BrandSlice.reducer
    }
})


export default Store;