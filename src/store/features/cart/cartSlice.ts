
import { createSlice } from "@reduxjs/toolkit";

interface Product {
    id: number;
    name: string;
    detail: string;
    price: number;
    info: string;
    offer: string;
    image: string;
    quantity?: number;
}

export interface CartState {
    cart: Product[];
    quantity: number;
}


export const initialState: CartState = {
    cart: [],
    quantity: 0
};

export interface ActionType {
    payload: Product
}
export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action: ActionType) => {
            state.cart.push(action.payload);
            // const itemInCart = state.cart.find((item: Product) => item?.id === action.payload?.id);

            // if(itemInCart) {
                
            // } else {
            //     // state.cart.
            //     state.cart.push({...action.payload, quantity: 1})
            // }
        },
        removeFromCart: (state, action) => {
            console.log(action)
            console.log(state.cart.filter((item) => item.id !== action.payload));
            let filtered = state.cart.filter((item) => item.id !== action.payload);
            state.cart = filtered;
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;