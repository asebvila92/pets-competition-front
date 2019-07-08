import {
  GET_PETS_PERSON_SUCCESS, 
  GET_PETS_PERSON_ERROR, 
} from "../types/allTypes";

import {
  getPetsOfPerson,
} from "../../api/petsApi";

export const actionGetPetsOfPerson = (person) => {
  return (dispach) => {
    return getPetsOfPerson(person).then(
      (response) => {
        dispach({
          type: GET_PETS_PERSON_SUCCESS,
          payload: response.data,
        })
      },
      (error) => {
        dispach({
          type: GET_PETS_PERSON_ERROR,
        })
      }
    );
  };
}

