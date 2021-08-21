import { combineReducers } from 'redux-immutable';
import { reducer as headerRuducer } from '../common/header/store';

const reducer = combineReducers({
    header: headerRuducer
});

export default reducer;