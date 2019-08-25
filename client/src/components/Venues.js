/* eslint-disable no-script-url */

import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Title from './Title';
import PropTypes from 'prop-types';
import Venue from './Venue';
import DynamicTableHead from './DynamicTableHead';
import Typography from '@material-ui/core/Typography';

export const Venues = (props) => {
  
  const tableCols = [
    {id: 1, name: 'Name'}, 
    {id: 2, name: 'Categories'}, 
    {id: 3, name: 'Location'}, 
    {id: 4, name: 'City'}, 
    {id: 5, name: 'State'}
  ];

  const numberOfVenues = props.venues.length;
  let tableBody;
  let emptyText;
  if(numberOfVenues > 0){
    tableBody = <TableBody>
    {props.venues.map((row) => (
      <Venue key={row.id} name={row.name} categories={row.categories} location={row.location} />     
    ))}
  </TableBody>;
    emptyText = <span></span>;
  } else {
    tableBody = <TableBody></TableBody>;
    emptyText = <Typography style={{marginTop: 30}} variant="body2" color="textSecondary" align="center">There are no venues</Typography>;
  }
  return (
    <React.Fragment>
      <Title>Found Venues</Title>
      <Table size="small">
        <DynamicTableHead headernames={tableCols} />
        {tableBody}
      </Table>
      {emptyText}
    </React.Fragment>
  );
}

Venues.propTypes = {
    venues: PropTypes.array.isRequired
}