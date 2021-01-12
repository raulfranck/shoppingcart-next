import React, {useState, useEffect} from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Cart from '../cart/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color=""> 
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shopping Next
          </Typography>
          <Button color="inherit">
              <Cart />
          </Button>
        </Toolbar>
      </AppBar>
    </div>  
  );
}