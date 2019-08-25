import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  copyright: {
    marginBottom: theme.spacing(4),
  }
}));
export const Copyright = (props) => {
    const classes = styles();
    return (
      <Typography className={classes.copyright} variant="body2" color="textSecondary" align="center">
          {props.name}
      </Typography>
    );
}

Copyright.propTypes = {
  name: PropTypes.string.isRequired
}