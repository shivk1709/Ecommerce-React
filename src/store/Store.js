import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";

const Store = configureStore({
    reducer : {
        products : CategorySlice.reducer
    }
})


export default Store;