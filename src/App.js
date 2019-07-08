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
  }

  static propTypes = {
    onGetPersons: PropTypes.func.isRequired,
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
  }
}

  const mapStateToProps = (store, ownProps) => {
    console.log(store.reducerPerson.persons); //test promise
    return {
      persons: store.reducerPerson.persons,
    }
  }

  


export default withRouter(connect(mapStateToProps,mapDispachToProps)(App));
