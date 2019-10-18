import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { filteredTasksSelector } from '../selectors';

const mapStateToProps = (state) => {
  const tasks = filteredTasksSelector(state);
  return { tasks };
};

const TasksList = (props) => {
  const { tasks } = props;

  if (tasks.length === 0) {
    return <div>No tasks</div>;
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => <Task key={task.id} task={task} />)}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(TasksList);
