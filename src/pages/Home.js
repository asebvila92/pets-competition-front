import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Button,
  Tooltip,
} from '@material-ui/core';

//assets
import './Home.scss';

class Home extends Component {
  static propTypes = {
    people: PropTypes.array.isRequired,
    petsOfPerson: PropTypes.array.isRequired,
    onGetPetsOfPerson: PropTypes.func.isRequired,
    onPostPet: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { match, onGetPetsOfPerson } = this.props;
    onGetPetsOfPerson(match.params.id);
  }

  render() {
    const { people, petsOfPerson, match } = this.props;
    const selectedPerson = people.find(
      person => String(person._id) === match.params.id,
    );
    return (
      <div className="Home">
        <div className="profile">
          <div className="person">
            <div className="image" />
            <label>{selectedPerson.name}</label>
          </div>
          <div className="pets">
            <div className="title">
              <h1>Pets</h1>
              <Tooltip title="this function is in construction">
                <Button color="secondary" size="large">
                  +
                </Button>
              </Tooltip>
            </div>
            <div className="list-pets">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Name</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Type</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {petsOfPerson.map((p, key) => (
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
          <div className="event">
            <h1>event in Latu Dogs and Cats</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div className="enroll">
              <Tooltip title="this function is in construction">
                <Button color="secondary">ENROLL</Button>
              </Tooltip>
            </div>
          </div>
          <div className="event">
            <h1>event in Latu Dogs and Cats</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div className="enroll">
              <Tooltip title="this function is in construction">
                <Button color="secondary">ENROLL</Button>
              </Tooltip>
            </div>
          </div>
          <div className="event">
            <h1>event in Latu Dogs and Cats</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div className="enroll">
              <Tooltip title="this function is in construction">
                <Button color="secondary">ENROLL</Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
