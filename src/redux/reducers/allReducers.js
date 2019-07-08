//dependecies
import {combineReducers} from 'redux';

//reducers
import reducerPerson from './reducerPerson';
import reducerPet from './reducerPet';

const reducer = combineReducers({
  reducerPerson,
  reducerPet,
})

export default reducer;
