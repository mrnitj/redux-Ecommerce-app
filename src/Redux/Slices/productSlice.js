import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState:[],
    reducers: {
        productsList: (state, action) => {
            // console.log(state);
            state.length = 0; // Clear the existing state
            state.push(...action.payload); // Add new items from the payload
            
        },
        removeProduct: (state, action) => {
            const { id } = action.payload;
            return state.filter((e) => e.id !== id);
        },

    },
});

export const { productsList , removeProduct} = productSlice.actions;

export default productSlice.reducer;
