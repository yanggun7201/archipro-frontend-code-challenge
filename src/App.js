import React, { Component } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import SortableHeader from "./components/UI/table/SortableHeader";
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
            sortColumn: "name"
        };
    }

    doSort = (sortColumn, sortAsc) => {
        this.setState({
            sortColumn,
            sortAsc: !!!sortAsc
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

    getTable() {
        return (
            <Table className="App-table">
                <thead>{this.getSortableHeaders()}</thead>
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
