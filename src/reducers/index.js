import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import tasks from './tasks';
import topPanelUIState from './topPanel';

export default combineReducers({
  tasks,
  topPanelUIState,
  form: formReducer,
});
