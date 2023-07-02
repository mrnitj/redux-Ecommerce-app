import { createSlice } from "@reduxjs/toolkit";

const ViewDetailsslice = createSlice({
    name: "view",
    initialState:[],
    reducers: {
       
        selectedProduct : (state ={}, action) =>{

            return {...action.payload} 
            
        }
    },
});

export const {selectedProduct } = ViewDetailsslice.actions;

export default ViewDetailsslice.reducer;
