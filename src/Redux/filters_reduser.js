import {filterAPI} from "../api/api";

const SET_FILTER_OPTION = 'SET_FILTER_OPTION';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    filterOptions: [],
    isFetching: true
}

const FiltersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER_OPTION:
            return { ...state, filterOptions: action.filterOptions };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        default:
            return state;
    }
}

export const setFilterOptions = (filterOptions) => ({type: SET_FILTER_OPTION, filterOptions});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const requestFilterOptions = (filterOptions) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        filterAPI.filterOptions(filterOptions).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setFilterOptions(data.items));
        })
    }
}

export default FiltersReducer;