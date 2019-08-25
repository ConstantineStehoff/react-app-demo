import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


export default function Venue(props) {
  return (
    <TableRow>
        <TableCell>{props.name}</TableCell>
        <TableCell>{props.categories[0].name}</TableCell>
        <TableCell>{props.location.address}</TableCell>
        <TableCell>{props.location.city}</TableCell>
        <TableCell>{props.location.state}</TableCell>
    </TableRow>
  );
}

Venue.propTypes = {
    name: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired
}