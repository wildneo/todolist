import React from 'react';
import { connect } from 'react-redux';
import { Segment, Dropdown } from 'semantic-ui-react';
import * as actions from '../actions';

const mapStateToProps = ({ tasks: { currentFilterName } }) => {
  const props = { currentFilterName };

  return props;
};

const actionsList = {
  setTasksFilter: actions.setTasksFilter,
};

const filters = [
  ['all', 'All Tasks'],
  ['active', 'Active Tasks'],
  ['complete', 'Completed Tasks'],
];

const Filter = (props) => {
  const handleClick = (filterName) => () => {
    const { setTasksFilter } = props;
    setTasksFilter({ filterName });
  };

  const renderFilter = ([filterName, title]) => (
    <Dropdown.Item
      onClick={handleClick(filterName)}
      key={filterName}
      value={title}
      text={title}
    />
  );

  const { currentFilterName } = props;

  return (
    <Segment vertical>
      <Dropdown
        className="basic icon"
        text={currentFilterName}
        labeled
        button
        icon="filter"
      >
        <Dropdown.Menu
          content={filters.map(renderFilter)}
        />
      </Dropdown>
    </Segment>
  );
};

export default connect(mapStateToProps, actionsList)(Filter);
