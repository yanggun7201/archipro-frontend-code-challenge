import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAlphaUp, faSortAlphaDown } from "@fortawesome/free-solid-svg-icons";
const SortableHeader = props => {
    const { sortAsc, children, isSorted, sortColumn, onSort } = props;

    const handleSort = () => {
        onSort(sortColumn, sortAsc);
    };

    const getClassName = () => {
        if (!isSorted) {
            return "";
        }

        return sortAsc ? "sort-column-up" : "sort-column-down";
    };

    return (
        <th className={"sort-icon " + getClassName()} onClick={handleSort}>
            {children}
            &nbsp;
            <FontAwesomeIcon icon={sortAsc ? faSortAlphaUp : faSortAlphaDown} />
        </th>
    );
};

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
