export default function reducerCompetition(state = {competitions: []}, action){
  switch(action.type){
    case 'GET_COMPETITIONS_SUCCESS': {
      return {...state, competitions: action.payload}
    }
    default:
      return state;
  }
}