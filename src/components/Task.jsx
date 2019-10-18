import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const actionsList = {
  toggleTask: actions.toggleTask,
  removeTask: actions.removeTask,
};

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };

    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleToggleState = this.handleToggleState.bind(this);
    this.handleTaskRemove = this.handleTaskRemove.bind(this);
  }

  handleEnter() {
    this.setState({ isHovered: true });
  }

  handleLeave() {
    this.setState({ isHovered: false });
  }

  handleToggleState() {
    const { toggleTask, task: { id } } = this.props;
    toggleTask({ id });
  }

  handleTaskRemove() {
    const { removeTask, task: { id } } = this.props;
    removeTask({ id });
  }

  render() {
    const { isHovered } = this.state;
    const { task: { id, text, state } } = this.props;
    const completed = state === 'complete';

    return (
      <li
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
      >
        <input
          type="checkbox"
          readOnly
          id={id}
          checked={completed}
          onClick={this.handleToggleState}
        />
        <label htmlFor={id}>{text}</label>
        {isHovered && <button type="button" onClick={this.handleTaskRemove}>X</button>}
      </li>
    );
  }
}

export default connect(null, actionsList)(Task);
