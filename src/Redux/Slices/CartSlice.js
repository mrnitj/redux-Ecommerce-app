import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addItem:(state,action) => {
            
            state.push(action.payload)


        },

        removeItem: (state, action) => {

        },

        clearCart:(state, action) => {
            
            state=[]

        }
    }
})

export const {addItem,removeItem,clearCart} = CartSlice.actions

export default CartSlice.reducer