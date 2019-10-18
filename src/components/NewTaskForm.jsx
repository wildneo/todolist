import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import uniqueId from 'lodash.uniqueid';
import * as actions from '../actions';

const actionsList = {
  addNewTask: actions.addNewTask,
  switchTopUI: actions.switchTopUI,
};

const NewTaskForm = (props) => {
  const addTask = ({ text }) => {
    const { addNewTask, switchTopUI, reset: resetForm } = props;
    const newTask = { id: uniqueId(), text, state: 'active' };
    addNewTask({ task: newTask });
    switchTopUI({ display: 'default' });
    resetForm();
  };

  const closeForm = () => {
    const { switchTopUI } = props;
    switchTopUI({ display: 'default' });
  };

  const { handleSubmit, submitting, pristine } = props;

  return (
    <div>
      <form onSubmit={handleSubmit(addTask)}>
        <Field name="text" type="text" component="input" autoFocus required />
        <button type="submit" disabled={pristine || submitting}>Add</button>
        <button onClick={closeForm} type="button">X</button>
      </form>
    </div>
  );
};

const ConnectedNewTaskForm = connect(null, actionsList)(NewTaskForm);

export default reduxForm({ form: 'newTask' })(ConnectedNewTaskForm);
