import React, { Component } from "react";
import { Input } from "reactstrap";

class FilterInput extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <Input placeholder="filter" />;
    }
}

export default FilterInput;
