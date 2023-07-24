import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import viewDetailsslice from "./Slices/viewDetailsslice";
import CartSlice from "./Slices/CartSlice";
import UsersSlice from "./Slices/UsersSlice";
import AdminSlice from "./Slices/AdminSlice";

export const store = configureStore({
    reducer: {
        Prod: productSlice,
        view: viewDetailsslice,
        cart: CartSlice,
        user: UsersSlice,
        admin: AdminSlice,
    },
});
