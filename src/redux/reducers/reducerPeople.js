export default function reducerPeople(state = {people: []}, action){
  switch(action.type){
    case 'GET_PERSONS_SUCCESS': {
      return {...state, people: action.payload}
    }
    case 'GET_PERSONS_ERROR': {
      return {...state, error: "error de GET"}
    }
    case 'POST_PERSON_SUCCESS': {
      const newListPeople = [...state.people, action.payload];
      return {...state, people: newListPeople}
    }
    case 'POST_PERSON_ERROR': {
      return {...state, error: "error de POST"}
    }
    case 'DELETE_PERSON_SUCCESS': {
      const newListPeople = [...state.people, action.payload]
      return {...state, people: newListPeople}
    }
    case 'DELETE_PERSON_ERROR': {
      return {...state, error: "error de DELETE"}
    }
    default:
      return state;
  }
}
  