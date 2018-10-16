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
            data,
            sortAsc: true,
            sortColumn: ""
        };
    }

    doSort = sortColumn => {
        console.log("doSort", sortColumn);
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

    getRow() {
        return data.map(({ _id, name, email, phone }) => (
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
