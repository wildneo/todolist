import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Transition } from 'semantic-ui-react';
import uniqueId from 'lodash.uniqueid';
import * as actions from '../actions';

const actionsList = {
  addNewTask: actions.addNewTask,
  toggleUITop: actions.toggleUITop,
};

const NewTaskForm = (props) => {
  const addTask = ({ text }) => {
    const { addNewTask, toggleUITop, reset } = props;
    const newTask = {
      id: uniqueId(),
      state: 'active',
      text,
    };
    addNewTask({ task: newTask });
    toggleUITop();
    reset();
  };

  const closeForm = () => {
    const { toggleUITop } = props;
    toggleUITop();
  };

  const { handleSubmit, submitting, pristine } = props;

  return (
    <Transition
      transitionOnMount
      animation="fade down"
    >
      <Form
        onSubmit={handleSubmit(addTask)}
        autoComplete="off"
      >
        <Form.Group
          widths="equal"
          className="margined"
        >
          <Field
            name="text"
            type="text"
            component={Form.Input}
            placeholder="I want to do..."
            required
          />
          <Button
            type="submit"
            disabled={pristine || submitting}
            content="Add"
            positive
            basic
          />
          <Button
            onClick={closeForm}
            type="button"
            content="Cancel"
            basic
          />
        </Form.Group>
      </Form>
    </Transition>
  );
};

const ConnectedNewTaskForm = connect(null, actionsList)(NewTaskForm);

export default reduxForm({ form: 'newTask' })(ConnectedNewTaskForm);
