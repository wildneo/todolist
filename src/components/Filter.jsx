import React from 'react';
import { connect } from 'react-redux';
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

  const renderButton = ([filterName, title]) => {
    const { currentFilterName } = props;

    if (filterName === currentFilterName) {
      return <span key={filterName}>{title}</span>;
    }
    return (
      <button key={filterName} onClick={handleClick(filterName)} type="button">
        {title}
      </button>
    );
  };

  return (
    <div>
      {filters.map(renderButton)}
    </div>
  );
};

export default connect(mapStateToProps, actionsList)(Filter);
