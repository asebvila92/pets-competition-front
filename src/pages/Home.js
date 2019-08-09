import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Button,
} from '@material-ui/core';



//assets
import './Home.scss';

class Home extends Component{

  static propTypes = {
    onPostPetOfPerson: PropTypes.func.isRequired,
    people: PropTypes.array.isRequired,
    petsOfPerson: PropTypes.array.isRequired,
    onGetPetsOfPerson: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {match, onGetPetsOfPerson} = this.props;
    onGetPetsOfPerson(match.params.id);
  }
  
  render() {
    const {people, petsOfPerson, match} = this.props;
    const selectedPerson = people.find((person)=>String(person.id) === match.params.id)
    return(
      <div className="Home">
          
          <div className="profile">
            <div className="person">
              <div className="image">
              </div>
              <label>{selectedPerson.name}</label>
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
                      <TableCell><strong>Name</strong></TableCell>
                      <TableCell><strong>Type</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {petsOfPerson.map((p,key) => (
                      <TableRow key={key}>
                        <TableCell>{p.name}</TableCell>
                        <TableCell>{p.type}</TableCell>
                      </TableRow>
                    ))}
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
