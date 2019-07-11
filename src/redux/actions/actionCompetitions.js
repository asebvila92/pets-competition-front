import {
  GET_COMPETITIONS_SUCCESS,
  GET_COMPETITIONS_ERROR,
} from '../types/allTypes';

import {
  getCompetitions,
} from '../../api/competitionsApi';


export const actionGetCompetitions = () => {
  return (dispatch) => {
    return getCompetitions().then(
      (response) => {
        dispatch({
          type: GET_COMPETITIONS_SUCCESS,
          payload: response.data,
        })
      },
      (error) => {
        dispatch({
          type: GET_COMPETITIONS_ERROR,
        })
      }
    );
  };
}