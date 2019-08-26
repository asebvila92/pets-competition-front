//dependecies
import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
import { CircularProgress } from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPerson: null,
    };
  }

  static propTypes = {
    history: PropTypes.object,
    persons: PropTypes.array,
    onGetPersons: PropTypes.func.isRequired,
    onPostPerson: PropTypes.func.isRequired,
    onDeletePerson: PropTypes.func.isRequired,
    onGetPetsOfPerson: PropTypes.func.isRequired,
    onPostPet: PropTypes.func.isRequired,
    onDeletePet: PropTypes.func.isRequired,
    onGetCompetitions: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.onGetPersons();
  }

  handlePostPetOfPerson = pet => {
    this.props.onPostPet(pet);
  };

  handlePostPerson = person => {
    this.props.onPostPerson(person);
  };

  render() {
    const { isLoaded } = this.props;
    return (
      <div className="App">
        {isLoaded && (
          <div>
            <Header />
            <Route
              exact
              path="/"
              render={() => (
                <ListPeople
                  people={this.props.people}
                  onPostPerson={this.handlePostPerson}
                />
              )}
            />
            <Route
              path="/Home/:id"
              render={() => (
                <Home
                  onGetPetsOfPerson={this.props.onGetPetsOfPerson}
                  people={this.props.people}
                  petsOfPerson={this.props.petsOfPerson}
                  onPostPet={this.props.onPostPet}
                />
              )}
            />
          </div>
        )}
        {!isLoaded && <CircularProgress />}
      </div>
    );
  }
} //end of component.

const mapDispachToProps = dispach => {
  return {
    onGetPersons: () => {
      dispach(actionGetPersons());
    },
    onPostPerson: person => {
      dispach(actionPostPerson(person));
    },
    onDeletePerson: person => {
      dispach(actionDeletePerson(person));
    },
    onGetPetsOfPerson: person => {
      dispach(actionGetPetsOfPerson(person));
    },
    onPostPet: pet => {
      dispach(actionPostPet(pet));
    },
    onDeletePet: pet => {
      dispach(actionDeletePet(pet));
    },
    onGetCompetitions: () => {
      dispach(actionGetCompetitions());
    },
  };
};

const mapStateToProps = store => {
  return {
    people: store.reducerPeople.people,
    isLoaded: store.reducerPeople.isLoaded,
    selectedPerson: store.reducerPet.person,
    petsOfPerson: store.reducerPet.listPetsOfPerson,
    competitions: store.reducerCompetition.competitions,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispachToProps,
  )(App),
);
