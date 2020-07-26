import {expect, it} from "@jest/globals";
import React from 'react';
import BooksReducer, {setTotalBooksCount} from "./books_reducer";

let state = {
    books: [],
    isFetching: true,
    pageSize: 10,
    totalBooksCount: 500,
    currentPage: 1
}

it('max length total books count should be 500', () => {
    let action = setTotalBooksCount(state.totalBooksCount);
    let newState = BooksReducer(state, action);
    expect(newState.props.totalBooksCount).toBe(500);
})