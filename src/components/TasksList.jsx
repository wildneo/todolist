import React from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line object-curly-newline
import { Segment, Icon, Header, List } from 'semantic-ui-react';
import Task from './Task';
import { filteredTasksSelector } from '../selectors';

const mapStateToProps = (state) => {
  const tasks = filteredTasksSelector(state);
  return { tasks };
};

const TasksList = (props) => {
  const { tasks } = props;
  const items = tasks.map((task) => <Task key={task.id} task={task} />);

  if (tasks.length === 0) {
    return (
      <Segment
        textAlign="center"
        vertical
      >
        <Header
          as="h2"
          color="grey"
          icon
        >
          <Icon name="cancel" />
          <Header.Content
            content="There are no tasks"
          />
          <Header.Subheader
            content="To get started, add some items to your list."
          />
        </Header>
      </Segment>
    );
  }

  return (
    <Segment vertical>
      <List
        content={items}
        verticalAlign="middle"
        size="huge"
        divided
        link
      />
    </Segment>
  );
};

export default connect(mapStateToProps)(TasksList);
