

// "name": "Product 6",
// "detail": "Lorem ipsum dolor sit amet",
// "hero": "OMG This just came out today!",
// "price": "99",
// "info": "This is the latest and greatest product from Derp corp.",
// "offer": "info with offer",
// "image": "http://placehold.it/300x300/999/CCC"

import { createSlice } from "@reduxjs/toolkit";

export interface ProductState {
    producrs: {
        id: number;
        name: string;
        detail: string;
        price: number;
        info: string;
        offer: string;
        image: string;
    }[];
}

export const initialState = [
    {
        id: 1,
	    name: "Product 1",
	    detail: "Lorem ipsum dolor sit amet",
        hero: "OMG This just came out today!",
	    price: 99,
	    info: "This is the latest and greatest product from Derp corp.",
	    offer: "info with offer",
	    image: "http://placehold.it/300x300/999/CCC"
    },
    {
        id: 2,
	    name: "Product 2",
	    detail: "Lorem ipsum dolor sit amet",
        hero: "OMG This just came out today!",
	    price: 59,
	    info: "This is the latest and greatest product from Derp corp.",
	    offer: "info with offer",
	    image: "http://placehold.it/300x300/999/CCC"
    },
    {
        id: 3,
	    name: "Product 3",
	    detail: "Lorem ipsum dolor sit amet",
        hero: "OMG This just came out today!",
	    price: 199,
	    info: "This is the latest and greatest product from Derp corp.",
	    offer: "info with offer",
	    image: "http://placehold.it/300x300/999/CCC"
    },
    {
        id: 4,
	    name: "Product 4",
	    detail: "Lorem ipsum dolor sit amet",
        hero: "OMG This just came out today!",
	    price: 299,
	    info: "This is the latest and greatest product from Derp corp.",
	    offer: "info with offer",
	    image: "http://placehold.it/300x300/999/CCC"
    },
    {
        id: 5,
	    name: "Product 5",
	    detail: "Lorem ipsum dolor sit amet",
        hero: "OMG This just came out today!",
	    price: 499,
	    info: "This is the latest and greatest product from Derp corp.",
	    offer: "info with offer",
	    image: "http://placehold.it/300x300/999/CCC"
    }
];

export const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        addProduct: () => {

        },
        deleteProduct: () => {

        }
    }
});

export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;

