import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';


export default function DynamicTableHead(props) {
  return (
    <TableHead>
        <TableRow>
            {props.headernames.map((col) => (
                <TableCell key={col.id}>{col.name}</TableCell>     
            ))}
        </TableRow>
    </TableHead>
  );
}

DynamicTableHead.propTypes = {
    headernames: PropTypes.array.isRequired,
}