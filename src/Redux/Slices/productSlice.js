import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState:[],
    reducers: {
        productsList: (state, action) => {
            // console.log(state);
            state.length = 0; // Clear the existing state
            state.push(...action.payload); // Add new items from the payload
            // console.log('state',state);
        },
    },
});

export const { productsList } = productSlice.actions;

export default productSlice.reducer;
