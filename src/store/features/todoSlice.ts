

// "name": "Product 6",
// "detail": "Lorem ipsum dolor sit amet",
// "hero": "OMG This just came out today!",
// "price": "99",
// "info": "This is the latest and greatest product from Derp corp.",
// "offer": "info with offer",
// "image": "http://placehold.it/300x300/999/CCC"

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
    names: string[]
}

export const initialState: TodoState = {
    names: []
}

export const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.names.push(action.payload)
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.names.splice(action.payload, 1);
        }
    }
});

export const { addTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;

