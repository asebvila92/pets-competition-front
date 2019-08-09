import React,{Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

//assets
import './ListPeople.scss';


class List extends Component{

  static propTypes = {
    people : PropTypes.array.isRequired,
    onSelectPerson: PropTypes.func.isRequired,
    history: PropTypes.object,
  }
  
  render(){
    const {people, onSelectPerson} = this.props;
    
    return(
      <div className="ListPeople">
          <h2>Personas Ingresadas</h2>
          <table>
            <tbody>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th></th>
              </tr>
              {people.map((p,key) => (
                <tr key={key}>
                  <td>{p.name}</td>
                  <td>{p.surname}</td>
                  <td><button onClick={() => onSelectPerson(p)}>Select</button></td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    );
  }
}

export default withRouter(List);