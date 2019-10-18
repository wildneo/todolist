import React from 'react';
import { connect } from 'react-redux';
import NewTaskForm from './NewTaskForm';
import Menu from './Menu';
import * as actions from '../actions';

const mapStateToProps = ({ topPanelUIState }) => {
  const props = topPanelUIState;
  return props;
};

const actionsList = {
  switchTopUI: actions.switchTopUI,
};

const TopPanel = (props) => {
  const handleShowForm = () => {
    const { switchTopUI } = props;
    switchTopUI({ display: 'form' });
  };

  const handleShowMenu = () => {
    const { switchTopUI } = props;
    switchTopUI({ display: 'menu' });
  };

  const { display } = props;

  switch (display) {
    case 'form':
      return <div><NewTaskForm /></div>;

    case 'menu':
      return <div><Menu /></div>;

    default:
      return (
        <div>
          <button type="button" onClick={handleShowMenu}>#</button>
          <button type="button" onClick={handleShowForm}>+</button>
        </div>
      );
  }
};

export default connect(mapStateToProps, actionsList)(TopPanel);
