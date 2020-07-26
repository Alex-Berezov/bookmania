import React from 'react';
import {connect} from 'react-redux';
import Books from "./Books";
import {requestBooks, setCurrentPage} from "../../Redux/books_reducer";
import Preloader from "../common/Preloader/Preloader";

class BooksContainer extends React.Component {
    componentDidMount() {
        this.props.getBooks(this.props.currentPage, this.props.pageSize);
    }

    onPageChanges(pageNumber) {
        this.props.getBooks(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            { this.props.isFetching
                ? <Preloader />
                : <Books books={ this.props.books }
                         totalBooksCount={ this.props.totalBooksCount }
                         pageSize={ this.props.pageSize }
                         currentPage={ this.props.currentPage }
                         onPageChanges={ this.onPageChanges.bind(this) }
                />
            }
        </>
    };
}

const mapStateToProps = (state) => {
        return {
            books: state.booksPage.books,
            isFetching: state.booksPage.isFetching,
            pageSize: state.booksPage.pageSize,
            totalBooksCount: state.booksPage.totalBooksCount,
            currentPage: state.booksPage.currentPage
        }
}

export default connect(mapStateToProps,
    {
        getBooks: requestBooks,
        setCurrentPage
    })(BooksContainer);