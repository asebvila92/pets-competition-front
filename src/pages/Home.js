import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import {
  Icon,
  Fab,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
} from '@material-ui/core';



//assets
import './Home.scss';

class Home extends Component{

  constructor (props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    onPostPetOfPerson: PropTypes.func.isRequired,
    selectedPerson: PropTypes.object.isRequired,
    petsOfPerson: PropTypes.array.isRequired,
  }
  
  render() {
    const {selectedPerson, petsOfPerson} = this.props;
    return(
      <div className="Home">
          
          <div className="profile">
            <div className="person">
              <div className="image">
              </div>
              <label></label>
            </div>
            <div className="pets">
              <div className="title">
                <h1>Pets</h1>
                <Button color="secondary" size="large">+</Button>
              </div>
              <div className="list-pets">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>name</strong></TableCell>
                      <TableCell><strong>type</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Eros</TableCell>
                      <TableCell>Cat</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Zeus</TableCell>
                      <TableCell>Cat</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Luana</TableCell>
                      <TableCell>Dog</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        
        <div className="info">
          <div className='event'>
            <h1>event in Latu Dogs and Cats</h1>
            <p>
              fdasfdsafsdfafdasdfa dfa fdaf dagadsga gdagda adagda dafad 
            </p>
            <div className="enroll">
            <Button color="secondary">ENROLL</Button>
            </div>
          </div>
          <div className='event'>
            <h1>event in Latu Dogs and Cats</h1>
            <p>
              fdasfdsafsdfafdasdfa dfa fdaf dagadsga gdagda adagda dafad 
            </p>
            <div className="enroll">
            <Button color="secondary">ENROLL</Button>
            </div>
          </div>
          <div className='event'>
            <h1>event in Latu Dogs and Cats</h1>
            <p>
              fdasfdsafsdfafdasdfa dfa fdaf dagadsga gdagda adagda dafad 
            </p>
            <div className="enroll">
              <Button color="secondary">ENROLL</Button>
            </div>
          </div>
        </div>  
      </div>
      
    );
  }

}

export default withRouter(Home);
