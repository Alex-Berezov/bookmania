import React from 'react';
import classes from './Books.module.css';

const Books = (props) => {
    let pagesCount = Math.ceil(props.totalBooksCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return <div>
        {
            props.books.map(book => <div className={classes.singleBlockElem} key={book.id}>
                <div className={classes.imgBlock}>
                    <img src={!book.volumeInfo.imageLinks.thumbnail
                        ? 'No photo'
                        : book.volumeInfo.imageLinks.thumbnail
                    }/>
                </div>
                <div className={classes.infoBlock}>
                    <h3>{book.volumeInfo.title}</h3>
                    <p>{book.volumeInfo.authors}</p>
                    <p>{book.volumeInfo.description}</p>
                    <p><b>Genre:</b> {book.volumeInfo.categories}</p>
                </div>
            </div>
            )
        }

        <div className={classes.paginationBlock}>
            { pages.map( (p, index) => {
                return <div key={index} className={ props.currentPage === p
                    ? `${classes.selectedPage} ${classes.paginationBlockItem}`
                    : classes.paginationBlockItem }
                            onClick={ (e) => { props.onPageChanges(p); } }
                >
                    {p}
                </div>
            }) }
        </div>
    </div>
}

export default Books;