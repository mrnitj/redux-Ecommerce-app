import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        userList: (state,action) => {
            // state.length=0;
            state.push(action.payload);
        },
        removeUser:(state,action) => {
            const {id} = action.payload;
            return state.filter((e) => e.id !==id)
        }
    }
})


export const {userList} = UserSlice.actions;

export default UserSlice.reducer;