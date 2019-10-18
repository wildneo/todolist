import { handleActions } from 'redux-actions';
import without from 'lodash.without';
import omit from 'lodash.omit';
import * as actions from '../actions';

const defaultState = {
  byId: {},
  allIds: [],
  currentFilterName: 'all',
};

export default handleActions({
  [actions.addNewTask]: (state, { payload: { task } }) => {
    const { byId, allIds } = state;

    return {
      ...state,
      byId: { ...byId, [task.id]: task },
      allIds: [task.id, ...allIds],
    };
  },

  [actions.toggleTask]: (state, { payload: { id } }) => {
    const task = state.byId[id];
    const mapping = {
      complete: 'active',
      active: 'complete',
    };
    const updatedTask = { ...task, state: mapping[task.state] };

    return {
      ...state,
      byId: { ...state.byId, [id]: updatedTask },
    };
  },

  [actions.removeTask]: (state, { payload: { id } }) => {
    const { byId, allIds } = state;

    return {
      ...state,
      byId: omit(byId, id),
      allIds: without(allIds, id),
    };
  },

  [actions.setTasksFilter]: (state, { payload: { filterName } }) => ({
    ...state,
    currentFilterName: filterName,
  }),

  [actions.clearTasks]: () => defaultState,

}, defaultState);
