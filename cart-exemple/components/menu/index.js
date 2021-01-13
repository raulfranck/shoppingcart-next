import React, {useState, useEffect} from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link'

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

export default function ButtonAppBar(badgeCount) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="" variant="contained"> 
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/">
              <a>
              Shopping Next
              </a>
            </Link>
          </Typography>
            <Link href="cart-page/cart">
              <Button color="inherit">
                  <Cart badgeCount={badgeCount}/>
              </Button>
            </Link>
        </Toolbar>
      </AppBar>
    </div>  
  );
}