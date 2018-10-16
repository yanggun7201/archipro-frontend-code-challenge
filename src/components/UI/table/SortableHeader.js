import React, { Component } from "react";
import PropTypes from "prop-types";
class SortableHeader extends Component {
    handleSort = () => {
        const { sortColumn, onSort } = this.props;
        onSort(sortColumn);
    };

    render() {
        const { children } = this.props;
        return <th onClick={this.handleSort}>{children}</th>;
    }
}

SortableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    sortColumn: PropTypes.string.isRequired
};

export default SortableHeader;
