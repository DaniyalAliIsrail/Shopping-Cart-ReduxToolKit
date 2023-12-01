import { createSlice } from "@reduxjs/toolkit";
import productsData from "../productsData";

//ye pura state hay 
const initialState = {
        cart: [],
        items: productsData,
        totalQuantity: 0,
        totalPrice: 0,
};

export const cartSlice = createSlice({
        name: "cart",
        initialState,
        reducers: {
                addToCart: (state, action) => {
                        let find = state.cart.findIndex((item) => item.id === action.payload.id);
                        if (find >= 0) {
                                state.cart[find].quantity += 1;
                        } else {
                                state.cart.push(action.payload);
                        }
                },

                gettotalCart: (state) => {
                        let { totalQuantity, totalPrice } = state.cart.reduce(
                                (cartTotal, cartItem) => {
                                        console.log("cartTotal",cartTotal);
                                        console.log("cartTotal",cartItem);

                                        const {price,quantity} = cartItem;
                                        console.log(price,quantity);
                                        const itemTotal = price*quantity;

                                        cartTotal.totalPrice += itemTotal;
                                        cartTotal.totalQuantity += quantity;
                                        return cartTotal;
                                },
                                {
                                        totalQuantity : 0,
                                        totalPrice : 0 ,
                                },
                        );
                        state.totalPrice = parseInt(totalPrice.toFixed(2));
                        state.totalQuantity = totalQuantity;
                },

                // Yahan, state.cart ek array hai jo hamare cart ke items ko represent karta hai. filter function ka istemal kiya gaya hai taake har item ki ID ko check karen, aur agar kisi item ka ID action.payload ke ID ke barabar nahi hai, toh wo item naye state mein shamil ho jata hai. Is tarah, "removeItem" action aane par state mein se woh item filter ho jata hai jo us action ke payload mein diya gaya hai.
                //? note:
                //! state.cart mein sirf woh items bachte hain jo action.payload ke ID ke barabar nahi hain.
                
                removeItem: (state, action) => {
                        state.cart = state.cart.filter((item) => item.id !== action.payload);
                      },

                      increaseItemQuantity: (state, action) => {
                        state.cart = state.cart.map((item) => {
                          if (item.id === action.payload) {
                            return { ...item, quantity: item.quantity + 1 };
                          }
                          return item;
                        });
                      },

                      removeItemQunatity : (state,action)=>{
                        state.cart = state.cart.map((item)=>{
                                if(item.id === action.payload){
                                        return {... item , quantity:item.quantity - 1}
                                }
                                return item;
                        })
                      }


        },
});

export const { addToCart , gettotalCart , removeItem ,increaseItemQuantity , removeItemQunatity } = cartSlice.actions;
export default cartSlice.reducer;     