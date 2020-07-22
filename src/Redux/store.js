import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import BooksReducer from "./books_reducer";


let reducers = combineReducers({
    booksPage: BooksReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;