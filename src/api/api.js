import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes'
});

export const booksAPI = {
    getBooks(currentPage) {
        return instance.get(`?q=intitle/${currentPage}&orderBy=newest`)
            .then(response => {
                return response.data;
            })
    }
}

export const filterAPI = {
    filterOptions() {
        return instance.get(`?q=intitle&maxResults=40&orderBy=newest`)
            .then(response => {
                return response.data;
            })
    }
}