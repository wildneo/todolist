import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const defaultState = {
  display: 'default',
};

export default handleActions({
  [actions.switchTopUI]: (state, { payload: { display } }) => ({
    ...state,
    display,
  }),
}, defaultState);
