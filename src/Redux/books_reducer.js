import {booksAPI} from "../api/api";

const SET_BOOKS = 'SET_BOOKS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_BOOKS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    books: [],
    isFetching: true,
    pageSize: 10,
    totalBooksCount: 500,
    currentPage: 1
}

const BooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return { ...state, books: action.books };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case SET_TOTAL_BOOKS_COUNT:
            return { ...state, totalBooksCount: action.count };
        default:
            return state;
    }
}

export const setBooks = (books) => ({type: SET_BOOKS, books});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalBooksCount = (totalBooksCount) => ({type: SET_TOTAL_BOOKS_COUNT, count: totalBooksCount});

export const requestBooks = (page) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        booksAPI.getBooks(page).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setBooks(data.items));
            dispatch(setTotalBooksCount(data.totalItems));
        })
    }
}

export default BooksReducer;