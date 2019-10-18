import React from 'react';
import { connect } from 'react-redux';
import { lorem } from 'faker';
import times from 'lodash.times';
import uniqueId from 'lodash.uniqueid';
import * as actions from '../actions';

const actionsList = {
  addNewTask: actions.addNewTask,
  clearTasks: actions.clearTasks,
  switchTopUI: actions.switchTopUI,
};

const Menu = (props) => {
  const defaultDisplay = { display: 'default' };

  const handleRandom = () => {
    const { addNewTask, clearTasks, switchTopUI } = props;
    clearTasks();
    times(5, () => (
      addNewTask({
        task: {
          id: uniqueId(),
          text: lorem.sentence(),
          state: 'active',
        },
      })
    ));
    switchTopUI(defaultDisplay);
  };

  const handleClearTasks = () => {
    const { clearTasks, switchTopUI } = props;
    clearTasks();
    switchTopUI(defaultDisplay);
  };

  const handleCloseMenu = () => {
    const { switchTopUI } = props;
    switchTopUI(defaultDisplay);
  };

  return (
    <div>
      <button onClick={handleRandom} type="button">Random</button>
      <button onClick={handleClearTasks} type="button">Clear</button>
      <button onClick={handleCloseMenu} type="button">X</button>
    </div>
  );
};

export default connect(null, actionsList)(Menu);
