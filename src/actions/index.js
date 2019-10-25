import { createAction } from 'redux-actions';

export const addNewTask = createAction('TASK_ADD');
export const removeTask = createAction('TASK_REMOVE');
export const toggleTask = createAction('TASK_TOGGLE');
export const clearTasks = createAction('TASK_CLEAR');
export const setTasksFilter = createAction('TASK_FILTER_SET');
export const toggleUITop = createAction('UI_TOGGLE_TOP');
