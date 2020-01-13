import React, { Component } from 'react';
import { Table } from "reactstrap";

const TableData=({headers,Items})=> {
    
        return (
            <>
            <Table key={2} responsive>
                <thead className="text-primary">
                    <tr>
                        {headers.map((prop, key) => {
                            if (key === headers.length - 1)
                                return (
                                    <th key={key}>
                                        {prop}
                                    </th>
                                );
                            return <th key={key}>{prop}</th>;
                        })} 
                    </tr>
                </thead>
                <Items />
            </Table>
        </>
        );
}

export default TableData;