/* eslint-disable no-script-url */

import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Title from './Title';
import PropTypes from 'prop-types';
import Venue from './Venue';
import DynamicTableHead from './DynamicTableHead';

export const Venues = (props) => {
  
  const tableCols = [
    {id: 1, name: 'Name'}, 
    {id: 2, name: 'Categories'}, 
    {id: 3, name: 'Location'}, 
    {id: 4, name: 'City'}, 
    {id: 5, name: 'State'}
  ];
  return (
    <React.Fragment>
      <Title>Found Venues</Title>
      <Table size="small">
        <DynamicTableHead headernames={tableCols} />
        <TableBody>
          {props.venues.map((row) => (
            <Venue key={row.id} name={row.name} categories={row.categories} location={row.location} />     
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

Venues.propTypes = {
    venues: PropTypes.array.isRequired
}