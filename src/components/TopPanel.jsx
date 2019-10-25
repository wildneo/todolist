import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import NewTaskForm from './NewTaskForm';
import Menu from './Menu';

const mapStateToProps = ({ topPanelUIState }) => {
  const props = topPanelUIState;
  return props;
};

const TopPanel = (props) => {
  const { formUIState } = props;

  return (
    <Segment vertical>
      {formUIState === 'show'
        ? <NewTaskForm />
        : <Menu />}
    </Segment>
  );
};

export default connect(mapStateToProps)(TopPanel);
