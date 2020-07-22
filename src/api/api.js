import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes'
});

export const booksAPI = {
    getBooks(currentPage) {
        return instance.get(`?q=intitle/${currentPage}`)
            .then(response => {
                return response.data;
            })
    }
}
