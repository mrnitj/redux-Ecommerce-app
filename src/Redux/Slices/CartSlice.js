import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },

        removeItem: (state, action) => {
            const { id } = action.payload;
            return state.filter((e) => e.id !== id);
        },

        clearCart: (state) => {
            state.length = 0;
        },
        
        // editItem: (state, action) => {
        //     const {id, added} = action.payload;
        //     const ft = state.find ((e) => e.id === parseInt(id))
        //     if(ft) {
        //         ft.id = parseInt(id);
        //         ft.added = added;    
        //     }
        // }
    },
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
