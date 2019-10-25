/* eslint-disable object-curly-newline */
import React from 'react';
import { Container, Segment, Header, Icon } from 'semantic-ui-react';
import TopPanel from './TopPanel';
import Filter from './Filter';
import TasksList from './TasksList';

const App = () => (
  <>
    <Segment
      basic
      textAlign="center"
      inverted
    >
      <Container text>
        <Header
          as="h1"
          inverted
        >
          <Icon name="tasks" />
          <Header.Content
            content="ToDo"
          />
        </Header>
      </Container>
    </Segment>
    <Container text>
      <Segment>
        <TopPanel />
        <TasksList />
        <Filter />
      </Segment>
    </Container>
  </>
);

export default App;
