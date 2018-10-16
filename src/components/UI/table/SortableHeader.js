import React, { Component } from "react";
class SortableHeader extends Component {
    render() {
        const { children } = this.props;
        return <th>{children}</th>;
    }
}

export default SortableHeader;
