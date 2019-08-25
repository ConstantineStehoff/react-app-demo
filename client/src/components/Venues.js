/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Title from './Title';
import PropTypes from 'prop-types';
import Venue from './Venue';
import DynamicTableHead from './DynamicTableHead';

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export const Venues = (props) => {
  const classes = useStyles();
  // console.log('My props are ' + JSON.stringify(props));
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
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          See more venues
        </Link>
      </div>
    </React.Fragment>
  );
}

Venues.propTypes = {
    venues: PropTypes.array.isRequired
}