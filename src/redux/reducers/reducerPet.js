const reducerPet = (state = { listPetsOfPerson: [], person: {} }, action) => {
  switch (action.type) {
    case 'GET_PETS_PERSON_SUCCESS': {
      return { ...state, listPetsOfPerson: action.payload };
    }
    case 'GET_PETS_PERSON_ERROR': {
      return { ...state, error: 'error de GET' };
    }
    case 'POST_PET_SUCCESS': {
      const newlist = action.payload;
      return { ...state, listPetsOfPerson: newlist };
    }
    case 'POST_PET_ERROR': {
      return { ...state, error: 'error de POST' };
    }
    case 'DELETE_PET_SUCCESS': {
      const newlist = [...state.listPetsOfPerson, action.payload];
      return { ...state, listPetsOfPerson: newlist };
    }
    case 'DELETE_PET_ERROR': {
      return { ...state, error: 'error de DELETE' };
    }
    default:
      return state;
  }
};

export default reducerPet;
