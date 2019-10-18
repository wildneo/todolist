import { createSelector } from 'reselect';

const getTasksById = (state) => state.tasks.byId;
const getTaskIds = (state) => state.tasks.allIds;
const getCurrentFilterName = (state) => state.tasks.currentFilterName;

export const tasksSelector = createSelector(
  [getTasksById, getTaskIds],
  (byId, allIds) => allIds.map((id) => byId[id]),
);

export const filteredTasksSelector = createSelector(
  [tasksSelector, getCurrentFilterName],
  (tasks, filterName) => (filterName === 'all' ? tasks : tasks.filter((t) => t.state === filterName)),
);
