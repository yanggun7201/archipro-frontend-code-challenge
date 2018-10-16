import isEmpty from "lodash/isEmpty";

export const getSortedData = (data, sortColumn, sortAsc) => {
    if (!sortColumn || isEmpty(data)) {
        return data;
    }

    return data.slice().sort((userA, userB) => {
        let sortResult = userA[sortColumn].toLowerCase().localeCompare(userB[sortColumn].toLowerCase());
        return sortAsc ? sortResult : -sortResult;
    });
};

export const getFilteredData = (filters, data) => {
    const filterKeys = Object.keys(filters);
    if (isEmpty(filterKeys)) {
        return data;
    }

    let filteredData = data.slice();
    filterKeys.forEach(filterKey => {
        const filterValue = filters[filterKey].toLowerCase();
        filteredData = filteredData.filter(user => {
            return user[filterKey].toLowerCase().indexOf(filterValue) > -1;
        });
    });

    return filteredData;
};
