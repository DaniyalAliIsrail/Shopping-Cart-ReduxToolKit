import { createSlice } from "@reduxjs/toolkit";
import productsData from "../productsData";

const initialState = {
        cart: [],
        items: productsData,
        totalQuantity: 0,
        totalPrice: 0,
      };

export const cartSlice  = createSlice({
        name:"cart",
        initialState,
        reducers:{
               
                      
        },
});
export default cartSlice.reducer;     