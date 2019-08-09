//dependecies
import React, {Component} from 'react';
import {withRouter, Route} from 'react-router-dom'; 
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//Components
import Home from './pages/Home';
import Header from './components/Header';
import ListPeople from './pages/ListPeople';

//assets
import './App.scss';

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
    this.state = {
      selectedPerson: null,
    }
  }

  componentDidMount(){
    this.props.onGetPersons();
  }

  static propTypes = {
    persons: PropTypes.array,
    onGetPersons: PropTypes.func.isRequired,
    onPostPerson: PropTypes.func.isRequired,
    onDeletePerson: PropTypes.func.isRequired,
    onGetPetsOfPerson: PropTypes.func.isRequired,
    onPostPet: PropTypes.func.isRequired,
    onDeletePet: PropTypes.func.isRequired,
    onGetCompetitions: PropTypes.func.isRequired,
  }

  handlePostPetOfPerson = (pet) => {
    this.props.onPostPet(pet)
  }

  handleSelectPerson = (p) => {
    this.setState({selectedPerson: p});
    this.props.onGetPetsOfPerson(p);
    this.props.history.push("/Home");
  }  

  render() {
    return(
      <div className="App">
        <Header />
        <Route exact path="/" render = {() => (
          <ListPeople people={this.props.people} onSelectPerson={this.handleSelectPerson} />
        )} />
        <Route path="/Home" render= {() => (
          <Home 
            onGetPetsOfPerson={this.handlePostPetOfPerson} 
            selectedPerson={this.state.selectedPerson} 
            petsOfPerson={this.props.petsOfPerson}
          />
        )} />
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

const mapStateToProps = (store) => {
  return {
    people: store.reducerPeople.people,
    selectedPerson: store.reducerPet.person,
    petsOfPerson: store.reducerPet.listPetsOfPerson,
    competitions: store.reducerCompetition.competitions,
  }
}

export default withRouter(connect(mapStateToProps,mapDispachToProps)(App));
