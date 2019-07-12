import React, {Component} from 'react';

import {
  Button,
  Icon,
} from '@material-ui/core';

class Home extends Component{

  constructor (props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return(
      <div className="Home">
        <Button>
          <Icon>edit_icon</Icon>
          Hello world!
        </Button>  
        
        
      </div>
    );
  }

}

export default Home;
