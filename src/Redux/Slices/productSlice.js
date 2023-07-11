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
        editProduct: (state, action) => {
            
            const {id , title,image,price,description} = action.payload;
            console.log(state);
            const newone= state.find((e) => e.id === parseInt(id))
            console.log('newOnesss',newone);
                if( newone ) {
                     newone.id =parseInt(id)
                     newone.title = title;
                     newone.image = image;
                     newone.price= price;
                     newone.description=description;
                
                }
                
                return state
                
            },

    },
});

export const { productsList , removeProduct, editProduct} = productSlice.actions;

export default productSlice.reducer;
