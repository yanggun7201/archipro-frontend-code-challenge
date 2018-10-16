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
