import React, { Component } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import SortableHeader from "./components/UI/table/SortableHeader";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import data from "./api/data.json";
import logo from "./archipro_dev.webp";

class App extends Component {
    constructor() {
        super();
        this.state = {
            sortAsc: true,
            sortColumn: null
        };
    }

    doSort = (sortColumn, sortAsc) => {
        this.setState({
            sortColumn,
            sortAsc: !!!sortAsc
        });
    };

    getTable() {
        const { sortColumn, sortAsc } = this.state;

        return (
            <Table className="App-table">
                <thead>
                    <tr>
                        <SortableHeader
                            onSort={this.doSort}
                            sortAsc={sortColumn === "name" ? sortAsc : false}
                            sortColumn="name"
                        >
                            Name
                        </SortableHeader>
                        <SortableHeader
                            onSort={this.doSort}
                            sortAsc={sortColumn === "email" ? sortAsc : false}
                            sortColumn="email"
                        >
                            Email
                        </SortableHeader>
                        <SortableHeader
                            onSort={this.doSort}
                            sortAsc={sortColumn === "phone" ? sortAsc : false}
                            sortColumn="phone"
                        >
                            Contact Number
                        </SortableHeader>
                    </tr>
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
