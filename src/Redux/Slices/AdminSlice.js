import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice ({
    name :'admin',
    initialState : {
        initialState:[],
        token:localStorage.getItem('adminToken'),
        
    },
    reducers:{
        adminAuth:(state,action) => {
            
        }
    }
})

export const  { adminAuth} = AdminSlice.actions

export default AdminSlice.reducer