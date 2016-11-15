import {combineReducers} from 'redux';

// Import Reducers
import navigation from './navigation';
import subjects from './subjects';
import interactions from './interactions';

// Export Reducers
export default combineReducers({
  navigation,
  subjects,
  interactions
});
