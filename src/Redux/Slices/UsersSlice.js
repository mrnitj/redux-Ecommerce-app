import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:'user',
    initialState:{
        initialState:[],
        token: localStorage.getItem('user')
    },
    
    // token:
    reducers:{
        userList: (state,action) => {
            // state.length=0;
            state.initialState.push(action.payload);
        },
        removeUser:(state,action) => {
            const {id} = action.payload;
            return state.initialState.filter((e) => e.id !==id)
        }
    }
})


export const {userList} = UserSlice.actions;

export default UserSlice.reducer;