const reducerPet = (state = {listPetsOfPerson: [], person:{} }, action) => {
  switch(action.type){
    case "GET_PETS_PERSON_SUCCESS": {
      return {...state, listPetsOfPerson: action.payload}
    }
    case "GET_PETS_PERSON_ERROR": {
      return {...state, error: "error de GET"}
    }
    default:
      return state;
  }
}

export default reducerPet;