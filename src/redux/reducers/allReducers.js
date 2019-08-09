//dependecies
import {combineReducers} from 'redux';

//reducers
import reducerPeople from './reducerPeople';
import reducerPet from './reducerPet';
import reducerCompetition from './reducerCompetition';

const reducer = combineReducers({
  reducerPeople,
  reducerPet,
  reducerCompetition,
})

export default reducer;
