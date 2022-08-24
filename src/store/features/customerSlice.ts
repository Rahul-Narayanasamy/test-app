
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
    id: number;
    name: string;
    orders: string[]
}

export interface OrderState {
    names: Customer[]
}

export const initialState: OrderState = {
    names: []
}

export const customerSlice = createSlice({
    name: "customer",
    initialState: initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.names.push(action.payload)
        },
        // removeReservation: (state, action: PayloadAction<number>) => {
        //     state.names.splice(action.payload, 1);
        // }
    }
});

export const { addCustomer } = customerSlice.actions;

export default customerSlice.reducer;

