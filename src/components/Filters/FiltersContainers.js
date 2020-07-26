import React from 'react';
import {connect} from 'react-redux';
import {requestFilterOptions} from "../../Redux/filters_reduser";
import Filters from "./Filters";

class FiltersContainer extends React.Component {
    componentDidMount() {
        this.props.getFilterOptions();
    }

    render() {
        return <>
            { this.props.isFetching
                ? null
                : <Filters
                    filterOptions={ this.props.filterOptions }
                />
            }
        </>
    };
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.booksPage.isFetching,
        filterOptions: state.filters.filterOptions,
    }

}

export default connect(mapStateToProps,
    {
        getFilterOptions: requestFilterOptions
    })(FiltersContainer);