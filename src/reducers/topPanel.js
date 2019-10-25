import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const defaultState = {
  formUIState: 'hide',
};

export default handleActions({
  [actions.toggleUITop]: ({ formUIState }) => {
    const mapping = {
      show: 'hide',
      hide: 'show',
    };

    return { formUIState: mapping[formUIState] };
  },
}, defaultState);
