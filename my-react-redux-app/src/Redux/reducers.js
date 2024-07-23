import { combineReducers } from "redux";
import { FETCH_PRODUCTS_SUCCESS, ADD_ITEM, REMOVE_ITEM } from './actionTypes';
 
const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}
 
const productsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
 
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ITEM:
        const newItem = action.payload;
        const existingItem = state.items.find(item => item.id === newItem.id);
        return {
          ...state,
          totalQuantity: state.totalQuantity + 1,
          totalPrice: state.totalPrice + newItem.price,
          items: existingItem
            ? state.items.map(item =>
                item.id === newItem.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            : [...state.items, { ...newItem, quantity: 1 }],
        };
      case REMOVE_ITEM:
        const id = action.payload;
        const itemToRemove = state.items.find(item => item.id === id);
        if (!itemToRemove) return state;
        const updatedItems =
          itemToRemove.quantity === 1
            ? state.items.filter(item => item.id !== id)
            : state.items.map(item =>
                item.id === id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              );
        return {
          ...state,
          totalQuantity: state.totalQuantity - 1,
          totalPrice: state.totalPrice - itemToRemove.price,
          items: updatedItems,
        };
      default:
        return state;
    }
  };
 
export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,