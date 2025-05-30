

const ADD_CART_PRODUCT = "cart/addProduct";
const REMOVE_CART_PRODUCT = "cart/removeProduct";
function cartReducer(state=[] ,action){
    switch (action.type) {
        case ADD_CART_PRODUCT: {
          return [...state,action.payload]
        }
        case REMOVE_CART_PRODUCT: {
          return [...state].filter((item) =>item.productId !== action.payload.productId)
        }
        default:
          state;
      }
      return state;
}
export default cartReducer;