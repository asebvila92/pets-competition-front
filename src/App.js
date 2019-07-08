//dependecies
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'; 
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//assets
import './App.css';
import logo from './logo.svg';

import {
  actionGetPersons,
  actionPostPerson, 
  actionDeletePerson,
} from './redux/actions/allActions';
import { actionGetPetsOfPerson } from './redux/actions/actionPets';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.onGetPersons();

    const person = {name: "yo"}
    this.props.onPostPerson(person);
    
    this.props.onDeletePerson(person);

    this.props.onGetPetsOfPerson(person);
    
  }

  static propTypes = {
    onGetPersons: PropTypes.func.isRequired,
    onPostPerson: PropTypes.func.isRequired,
    onDeletePerson: PropTypes.func.isRequired,
    onGetPetsOfPerson: PropTypes.func.isRequired,
  }



  render() {
    return(
      <div className="App">
        <label>probamos todo desde componentDidMount</label>

      </div>
    );
  }

} //end of component.

  const mapDispachToProps = (dispach) => {
  return {
    onGetPersons: () => {
      dispach(actionGetPersons());
    },
    onPostPerson: (person) => {
      dispach(actionPostPerson(person));
    },
    onDeletePerson: (person) => {
      dispach(actionDeletePerson(person));
    },
    onGetPetsOfPerson: (person) => {
      dispach(actionGetPetsOfPerson(person))
    }

  }
}

  const mapStateToProps = (store, ownProps) => {
    console.log(store.reducerPet.listPetsOfPerson); //test promise
    return {
      persons: store.reducerPerson.persons,
      selectedPerson: store.reducerPet.person,
      petsOfPerson: store.reducerPet.listPetsOfPerson,
    }
  }

  


export default withRouter(connect(mapStateToProps,mapDispachToProps)(App));
