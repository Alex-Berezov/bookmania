import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import BooksReducer from "./books_reducer";
import FiltersReducer from "./filters_reduser";


let reducers = combineReducers({
    booksPage: BooksReducer,
    filters: FiltersReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;