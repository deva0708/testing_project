import axios from "axios";
import { FETCH_PRODUCTS_SUCCESS, ADD_ITEM, REMOVE_ITEM } from './actionTypes';
 
export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            console.log("response", response);
            dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
        } catch (error) {
            console.log('Error fetching products', error);
 
        }
    }
}
 
export const addItem = (product) =>{
    return {
        type: ADD_ITEM,
        payload: product,
    }
}
 
export const removeItem = (id) =>{
    return{
        type: REMOVE_ITEM,
        payload: id
    }
}