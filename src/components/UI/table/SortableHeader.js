import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAlphaUp, faSortAlphaDown } from "@fortawesome/free-solid-svg-icons";
class SortableHeader extends Component {
    handleSort = () => {
        const { sortColumn, onSort } = this.props;
        onSort(sortColumn);
    };

    render() {
        const { children } = this.props;
        return (
            <th className="sort-icon" onClick={this.handleSort}>
                {children} <FontAwesomeIcon icon={faSortAlphaUp} />
            </th>
        );
    }
}

SortableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    sortColumn: PropTypes.string.isRequired
};

export default SortableHeader;
