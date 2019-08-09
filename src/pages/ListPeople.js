import React,{Component} from 'react';
import {withRouter, Link as RouterLink} from 'react-router-dom';
import PropTypes from 'prop-types';

//assets
import './ListPeople.scss';

import {
  Link,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';


class List extends Component{

  static propTypes = {
    people : PropTypes.array.isRequired,
    history: PropTypes.object,
  }
  
  render(){
    const {people} = this.props;
    
    return(
      <div className="ListPeople">
        <h1>People</h1>
        <div className="people-table">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Surname</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {people.map((p,key) => (
                <TableRow key={key}>
                  <TableCell>{p.name}</TableCell>
                  <TableCell>{p.surname}</TableCell>
                  <TableCell><Link component={RouterLink} to ={`/Home/${p.code}`}>Select</Link></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default withRouter(List);