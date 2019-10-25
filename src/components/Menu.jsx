import React from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line object-curly-newline
import { Container, Button, Dropdown, Transition, Popup } from 'semantic-ui-react';
import uniqueId from 'lodash.uniqueid';
import times from 'lodash.times';
import { lorem } from 'faker';
import * as actions from '../actions';

const actionsList = {
  addNewTask: actions.addNewTask,
  clearTasks: actions.clearTasks,
  toggleUITop: actions.toggleUITop,
};

const Menu = (props) => {
  const handleRandom = () => {
    const { addNewTask, clearTasks } = props;
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
  };

  const handleClearTasks = () => {
    const { clearTasks } = props;
    clearTasks();
  };

  const handleShowForm = () => {
    const { toggleUITop } = props;
    toggleUITop();
  };

  const renderAddTaskBtn = () => (
    <Popup
      content="Add new task"
      trigger={(
        <Button
          onClick={handleShowForm}
          floated="right"
          icon="plus"
          basic
        />
      )}
    />
  );

  const renderOptionsBtn = () => (
    <Popup
      content="Additional option"
      trigger={(
        <Dropdown
          className="basic icon"
          icon="ellipsis vertical"
          button
        >
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={handleRandom}
              text="Random tasks"
            />
            <Dropdown.Item
              onClick={handleClearTasks}
              text="Clear all"
            />
          </Dropdown.Menu>
        </Dropdown>
      )}
    />
  );

  return (
    <Transition transitionOnMount>
      <Container className="margined">
        {renderAddTaskBtn()}
        {renderOptionsBtn()}
      </Container>
    </Transition>
  );
};

export default connect(null, actionsList)(Menu);
