import {
  GET_PERSONS_SUCCESS, 
  GET_PERSONS_ERROR,
  POST_PERSON_SUCCESS,
  POST_PERSON_ERROR,
} from '../types/allTypes';



import {
  getPersons,
  postPerson,
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

export function actionPostPerson(person) {
  return (dispach) => {
    return postPerson(person).then(
      (response) => {
        dispach({
          type: POST_PERSON_SUCCESS,
          payload: response.data,
        })
      },
      (error) => {
        dispach({
          type: POST_PERSON_ERROR,
        })
      }
    );
  };
}


