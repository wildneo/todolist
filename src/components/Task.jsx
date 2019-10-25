import React from 'react';
import { connect } from 'react-redux';
import { Button, List, Transition } from 'semantic-ui-react';
import cn from 'classnames';
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
    const { task: { text, state } } = this.props;
    const textEclipse = cn({ 'text-eclipse': isHovered });
    const active = state === 'active';
    const circle = active ? 'circle outline' : 'check circle outline';

    return (
      <List.Item
        active={active}
        className="text-truncate relative"
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
      >
        <Transition
          as={List.Content}
          visible={isHovered}
          // animation="scale"
        >
          <div className="absolutely">
            <Button
              onClick={this.handleTaskRemove}
              // className="absolutely"
              icon="trash alternate outline"
              color="red"
              compact
              basic
            />
          </div>
        </Transition>
        <List.Icon
          onClick={this.handleToggleState}
          name={circle}
          link
        />
        <List.Content>
          <span className={textEclipse}>{text}</span>
        </List.Content>
      </List.Item>
    );
  }
}

export default connect(null, actionsList)(Task);
