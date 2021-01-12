import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles(() => ({
  badge: {
    right: 0,
    top: 30,
    width: 35,
  },
}))(Badge);

export default function CustomizedBadges() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={2} color="secondary">
        <ShoppingCartIcon style={{ fontSize: 40 }}/>
      </StyledBadge>
    </IconButton>
  );
}