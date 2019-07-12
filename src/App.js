//dependecies
import React, {Component} from 'react';
import {withRouter, Route} from 'react-router-dom'; 
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//Components
import Home from './pages/Home';

//assets
import './App.css';
import logo from './logo.svg';

import {
  actionGetPersons,
  actionPostPerson, 
  actionDeletePerson,

  actionGetPetsOfPerson,
  actionPostPet,
  actionDeletePet,

  actionGetCompetitions,
} from './redux/actions/allActions';


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

    this.props.onPostPet({});

    this.props.onDeletePet({});
       
  }

  static propTypes = {
    onGetPersons: PropTypes.func.isRequired,
    onPostPerson: PropTypes.func.isRequired,
    onDeletePerson: PropTypes.func.isRequired,
    onGetPetsOfPerson: PropTypes.func.isRequired,
    onPostPet: PropTypes.func.isRequired,
    onDeletePet: PropTypes.func.isRequired,
    onGetCompetitions: PropTypes.func.isRequired,
  }



  render() {
    return(
      <div className="App">
        <Route path="/" component={Home}/>
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
    },
    onPostPet: (pet) => {
      dispach(actionPostPet(pet));
    },
    onDeletePet: (pet) => {
      dispach(actionDeletePet(pet));
    },
    onGetCompetitions: () => {
      dispach(actionGetCompetitions());
    }
  }
}

  const mapStateToProps = (store, ownProps) => {
    return {
      persons: store.reducerPerson.persons,
      selectedPerson: store.reducerPet.person,
      petsOfPerson: store.reducerPet.listPetsOfPerson,
      competitions: store.reducerCompetition.competitions,
    }
  }

  


export default withRouter(connect(mapStateToProps,mapDispachToProps)(App));
