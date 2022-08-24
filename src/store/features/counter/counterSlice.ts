import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number;
}   

const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        incremenet: (state) => {
            state.value +=1;
        },
        decrement: (state) => {
            state.value -=1;
        },
        incrementByValue: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
});

export const { incremenet, decrement, incrementByValue} = counterSlice.actions;

export default counterSlice.reducer;