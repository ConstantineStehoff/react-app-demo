import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export const Copyright = (props) => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
          {props.name}
      </Typography>
    );
}

Copyright.propTypes = {
  name: PropTypes.string.isRequired
}