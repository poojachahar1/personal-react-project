import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import wishListReducer from "./wishListReducer";

const reducer = combineReducers({
    products:productReducer,
    cartItems:cartReducer,
    wishList : wishListReducer
})