import React, { Component } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import SortableHeader from "./components/UI/table/SortableHeader";
import FilterInput from "./components/UI/table/FilterInput";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import data from "./api/data.json";
import logo from "./archipro_dev.webp";

const headerColumns = [
    {
        column: "name",
        text: "Name"
    },
    {
        column: "email",
        text: "Email"
    },
    {
        column: "phone",
        text: "Contact Number"
    }
];
class App extends Component {
    constructor() {
        super();
        this.state = {
            sortAsc: true,
            sortColumn: "name",
            filters: {}
        };
    }

    doSort = (sortColumn, sortAsc) => {
        this.setState({
            sortColumn,
            sortAsc: !!!sortAsc
        });
    };

    doFilter = (filterColumn, value) => {
        const { filters } = this.state;
        filters[filterColumn] = value;
        this.setState({
            filters
        });
    };

    getSortableHeaders = () => {
        const { sortColumn, sortAsc } = this.state;

        const ths = headerColumns.map(searchItem => {
            const isSorted = sortColumn === searchItem.column;

            return (
                <SortableHeader
                    key={searchItem.column}
                    onSort={this.doSort}
                    sortAsc={isSorted ? sortAsc : false}
                    sortColumn={searchItem.column}
                    isSorted={isSorted}
                >
                    {searchItem.text}
                </SortableHeader>
            );
        });

        return <tr>{ths}</tr>;
    };

    getFilters = () => {
        const ths = headerColumns.map(searchItem => (
            <th key={searchItem.column}>
                <FilterInput filterColumn={searchItem.column} onFilter={this.doFilter} />
            </th>
        ));

        return <tr>{ths}</tr>;
    };

    getTable() {
        return (
            <Table className="App-table">
                <thead>
                    {this.getSortableHeaders()}
                    {this.getFilters()}
                </thead>
                <tbody>{this.getRow()}</tbody>
            </Table>
        );
    }

    getSortedData = () => {
        const { sortColumn, sortAsc } = this.state;
        if (!sortColumn) {
            return data;
        }

        return data.slice().sort((userA, userB) => {
            let sortResult = userA[sortColumn].toLowerCase().localeCompare(userB[sortColumn].toLowerCase());
            return sortAsc ? sortResult : -sortResult;
        });
    };

    getRow() {
        return this.getSortedData().map(({ _id, name, email, phone }) => (
            <tr key={_id}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
            </tr>
        ));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <main className="App-content">
                    <Container>
                        <Row>
                            <Col>{this.getTable()}</Col>
                        </Row>
                    </Container>
                </main>
            </div>
        );
    }
}

export default App;
