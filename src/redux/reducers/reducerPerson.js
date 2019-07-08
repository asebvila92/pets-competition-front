export default function reducerPerson(state = {persons: []}, action){
  switch(action.type){
    case 'GET_PERSONS_SUCCESS': {
      return {...state, persons: action.payload}
    }
    case 'GET_PERSONS_ERROR': {
      return {...state, error: "error de GET"}
    }
    default:
      return state;
  }
}
  