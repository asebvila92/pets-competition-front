import {
  GET_PERSONS_SUCCESS, 
  GET_PERSONS_ERROR,
} from '../types/allTypes';



import {
  getPersons,
} from '../../api/personsApi';



export function actionGetPersons(){
  return (dispach) => {
    return getPersons().then(
      (response) => {
        dispach({
          type: GET_PERSONS_SUCCESS,
          payload: response.data
        })
      },
      (error) => {
        dispach({
          type: GET_PERSONS_ERROR,
        })
      }
    );
  };
}


