import React, {Component} from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

//assets
import './Header.scss';

class Header extends Component{

  constructor (props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return(
      <div className="Header">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Pets Competition
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;