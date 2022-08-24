

// "name": "Product 6",
// "detail": "Lorem ipsum dolor sit amet",
// "hero": "OMG This just came out today!",
// "price": "99",
// "info": "This is the latest and greatest product from Derp corp.",
// "offer": "info with offer",
// "image": "http://placehold.it/300x300/999/CCC"

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ReservationState {
    names: string[]
}

export const initialState: ReservationState = {
    names: []
}

export const reservationSlice = createSlice({
    name: "reservation",
    initialState: initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<string>) => {
            state.names.push(action.payload)
        },
        removeReservation: (state, action: PayloadAction<number>) => {
            state.names.splice(action.payload, 1);
        }
    }
});

export const { addReservation, removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;

