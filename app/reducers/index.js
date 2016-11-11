import {combineReducers} from 'redux';

// Import Reducers
import navigation from './navigation';
import subjects from './subjects';

// Export Reducers
export default combineReducers({navigation, subjects});
