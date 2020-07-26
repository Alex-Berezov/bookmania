import classes from "./Filters.module.css";
import React from "react";

const Filters = (props) => {

    const booksArray = props.filterOptions;

    let cleanGenreArr = booksArray.map((el) => {
        return cleanGenreArr = el.volumeInfo.categories;
    });

    let cleanAuthorArr = booksArray.map((el) => {
        return cleanAuthorArr = el.volumeInfo.authors;
    });//Блин, как убрать это дублирование кода??!?!?

    const cleanArr = (arr) => {
        let incomeArr = new Set(arr.join(',').split(','));
        let spreadedIncomeArr = [...incomeArr];
        spreadedIncomeArr.unshift('All');
        let filteredArr = spreadedIncomeArr.filter((el) => {
            return el !== '';
        });

        return filteredArr;
    }

    //Trying to get a filtered array. But it didn't work as I want...
    const handleSelectGenre = (e) => {
        let filterQuery = e.target.value;
        //console.log('filterQuery: ', filterQuery)

        for (let el in booksArray) {
            var displayedGenre = [];
            let arr1 = []
            arr1 = genreArr[el].volumeInfo.categories;
            let arr2 = []
            arr2 = filterQuery.split()

            if (arr1[0] === arr2.join()) {
                displayedGenre.push(genreArr[el]);
            }
        }
    }

    const makeOption = (arr) => {
        let some = arr.map( (name, index) => {
            return <option
                key={index}
                value={name}
            >
                {name}
            </option>
        })

        return some;
    }

    const optionGenre = makeOption(cleanArr(cleanGenreArr))
    const optionAuthor = makeOption(cleanArr(cleanAuthorArr))

    return <div className={classes.filter_elems}>
        <div className={classes.filter_elem}>
            <label htmlFor='optionGenre'>Choice genre: </label>

            <select name='optionGenre' id='optionGenre' onChange={handleSelectGenre}>
                { optionGenre }
            </select>
        </div>

        <div className={classes.filter_elem}>
            <label htmlFor='optionAuthor'>Choice author: </label>

            <select name='optionAuthor' id='optionAuthor' onChange={handleSelectGenre}>
                { optionAuthor }
            </select>
        </div>
    </div>
}

export default Filters;