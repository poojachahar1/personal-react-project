import { createStore ,combineReducers} from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import wishListReducer from "./wishListReducer";

const ADD_CART_PRODUCT = "cart/addProduct";
const REMOVE_CART_PRODUCT = "cart/removeProduct";
const reducer = combineReducers({
  product:productReducer,
  cartItem:cartReducer,
  wishList:wishListReducer
})
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.subscribe(() => {
  store.getState();
});

store.dispatch({
  type: ADD_CART_PRODUCT,
  payload: { productId: 1, quantity: 5 },
});

store.dispatch({
  type: ADD_CART_PRODUCT,
  payload: { productId: 2, quantity: 4 },
});

store.dispatch({
  type: REMOVE_CART_PRODUCT,
  payload: { productId: 1 },
});

console.log(store.getState());
