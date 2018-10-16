import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAlphaUp, faSortAlphaDown } from "@fortawesome/free-solid-svg-icons";
class SortableHeader extends Component {
    handleSort = () => {
        const { sortColumn, sortAsc, onSort } = this.props;
        onSort(sortColumn, sortAsc);
    };

    render() {
        const { children, sortAsc } = this.props;
        return (
            <th className="sort-icon" onClick={this.handleSort}>
                {children}
                &nbsp;
                <FontAwesomeIcon icon={sortAsc ? faSortAlphaUp : faSortAlphaDown} />
            </th>
        );
    }
}

SortableHeader.defaultProps = {
    sortAsc: false
};

SortableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    sortColumn: PropTypes.string.isRequired,
    sortAsc: PropTypes.bool
};

export default SortableHeader;
