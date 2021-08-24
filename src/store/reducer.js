import { combineReducers } from 'redux-immutable';
import { reducer as headerRuducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';

const reducer = combineReducers({
  header: headerRuducer,
  home: homeReducer,
});

export default reducer;