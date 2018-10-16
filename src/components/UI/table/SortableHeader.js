import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAlphaUp, faSortAlphaDown } from "@fortawesome/free-solid-svg-icons";
class SortableHeader extends Component {
    handleSort = () => {
        const { sortColumn, sortAsc, onSort } = this.props;
        onSort(sortColumn, sortAsc);
    };

    getClassName = () => {
        const { sortAsc, isSorted } = this.props;
        if (!isSorted) {
            return "";
        }

        return sortAsc ? "sort-column-up" : "sort-column-down";
    };

    render() {
        const { children, sortAsc } = this.props;
        return (
            <th className={"sort-icon " + this.getClassName()} onClick={this.handleSort}>
                {children}
                &nbsp;
                <FontAwesomeIcon icon={sortAsc ? faSortAlphaUp : faSortAlphaDown} />
            </th>
        );
    }
}

SortableHeader.defaultProps = {
    sortAsc: false,
    isSorted: false
};

SortableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    sortColumn: PropTypes.string.isRequired,
    sortAsc: PropTypes.bool,
    isSorted: PropTypes.bool
};

export default SortableHeader;
