import React, { Component } from "react";
import { Input } from "reactstrap";
import PropTypes from "prop-types";

class FilterInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    handleFilter = e => {
        const { filterColumn, onFilter } = this.props;
        const value = e.target.value;
        this.setState({
            value
        });
        onFilter(filterColumn, value);
    };

    render() {
        const { placeholder, filterColumn } = this.props;
        return (
            <Input placeholder={placeholder ? placeholder : `filter:${filterColumn}`} onChange={this.handleFilter} />
        );
    }
}

FilterInput.propTypes = {
    onFilter: PropTypes.func.isRequired,
    filterColumn: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

export default FilterInput;
