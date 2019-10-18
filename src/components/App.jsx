import React from 'react';
import TopPanel from './TopPanel';
import Filter from './Filter';
import TasksList from './TasksList';

const App = () => (
  <div>
    <TopPanel />
    <Filter />
    <TasksList />
  </div>
);

export default App;
