import { createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import BookReducer from "./BookReducer";
 
const store = createStore(BookReducer, composeWithDevTools())
 
export default store;