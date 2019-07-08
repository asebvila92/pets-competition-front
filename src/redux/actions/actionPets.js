import {
  GET_PETS_PERSON_SUCCESS, 
  GET_PETS_PERSON_ERROR,
  POST_PET_SUCCESS,
  POST_PET_ERROR, 
} from "../types/allTypes";

import {
  getPetsOfPerson,
  postPet,
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


export const actionPostPet = (pet) => {
  return (dispach) => {
    return postPet(pet).then(
      (response) => {
        dispach({
          type: POST_PET_SUCCESS,
          payload: response.data,
        })
      },
      (error) => {
        dispach({
          type: POST_PET_ERROR,
        })
      }
    );
  };
}

