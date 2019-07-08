export default function reducerPerson(state = {persons: []}, action){
  switch(action.type){
    case 'GET_PERSONS_SUCCESS': {
      return {...state, persons: action.payload}
    }
    case 'GET_PERSONS_ERROR': {
      return {...state, error: "error de GET"}
    }
    case 'POST_PERSON_SUCCESS': {
      const newListPersons = [...state.persons, action.payload];
      return {...state, persons: newListPersons}
    }
    case 'POST_PERSON_ERROR': {
      return {...state, error: "error de POST"}
    }
    default:
      return state;
  }
}
  