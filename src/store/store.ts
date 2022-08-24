import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import productReducer from "./features/products/productSlice";
import cartReducer from "./features/cart/cartSlice";
import reservationReducer from "./features/reservationSlice";
import todosReducer from "./features/todoSlice"
import customerReducer from "./features/customerSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
        cart: cartReducer,
        reservation: reservationReducer,
        todos: todosReducer,
        customer: customerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch