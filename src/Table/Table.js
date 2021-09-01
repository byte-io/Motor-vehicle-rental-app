import React, {useMemo} from "react";
import {useTable} from "react-table"; 
import { columns } from './column.js';
import data from './Data.json';
import './table.css';

const Table = () => {
    
    // const columns = useMemo(()=> columns, [] );
    // const data = useMemo(()=> data, [] );

    const tableInstance = useTable({
        columns, data
    })

    const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <table id="customers"{...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}</th>
                        ))}
                    </tr>)
                )}     
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => 
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                                }
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    )
}

export default Table;
