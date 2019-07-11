//dependecies
import {combineReducers} from 'redux';

//reducers
import reducerPerson from './reducerPerson';
import reducerPet from './reducerPet';
import reducerCompetition from './reducerCompetition';

const reducer = combineReducers({
  reducerPerson,
  reducerPet,
  reducerCompetition,
})

export default reducer;
