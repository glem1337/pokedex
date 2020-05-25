import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { capitalizeFirstLetter } from '../../utils/utils';

const TableData = ({ rows }) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {capitalizeFirstLetter(row.name)}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default TableData;
