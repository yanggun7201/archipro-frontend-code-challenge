import { getSortedData, getFilteredData } from "./utils";

const dave = {
    name: "Dave",
    email: "123dave@gmail.com",
    phone: "123 456 7890"
};

const lucas = {
    name: "Lucas",
    email: "456lucas@gmail.com",
    phone: "123 456 7890"
};

const john = {
    name: "John",
    email: "789john@gmail.com",
    phone: "123 456 7890"
};

const initData = [dave, lucas, john];

test("Filter correct data with filter value", () => {
    const data = initData;
    let filters = null;

    filters = {
        name: "d" // Dave
    };
    expect(getFilteredData(filters, data)).toEqual([dave]);

    filters = {
        name: "j" // John
    };
    expect(getFilteredData(filters, data)).toEqual([john]);

    filters = {
        name: "l" // Lucas
    };
    expect(getFilteredData(filters, data)).toEqual([lucas]);

    filters = {
        name: "a" // Dave, Lucas
    };
    expect(getFilteredData(filters, data)).toEqual([dave, lucas]);
});

test("return empty array from getSortedData when data is empty", () => {
    const data = [];
    let sortColumn = "name";
    let sortAsc = true;
    expect(getSortedData(data, sortColumn, sortAsc)).toEqual([]);
});

test("return empty array from getSortedData when sortColumn is not available", () => {
    const data = [];
    let sortColumn = null;
    let sortAsc = true;
    expect(getSortedData(data, sortColumn, sortAsc)).toEqual([]);
});

test("basic sort test", () => {
    const data = initData;
    let sortColumn = "name";
    let sortAsc = true;

    //

    sortColumn = "name";
    sortAsc = true;
    expect(getSortedData(data, sortColumn, sortAsc)).toEqual([dave, john, lucas]);

    sortColumn = "name";
    sortAsc = false;
    expect(getSortedData(data, sortColumn, sortAsc)).toEqual([lucas, john, dave]);

    sortColumn = "email";
    sortAsc = true;
    expect(getSortedData(data, sortColumn, sortAsc)).toEqual([dave, lucas, john]);

    sortColumn = "email";
    sortAsc = false;
    expect(getSortedData(data, sortColumn, sortAsc)).toEqual([john, lucas, dave]);
});
