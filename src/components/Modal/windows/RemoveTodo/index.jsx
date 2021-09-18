import React, { useContext } from 'react';

import { AuthContext } from '../../../../context';
import { closeRemoveModal, removeTodo } from '../../../../context/auth/actions';

import {
  Window,
  WindowDescription,
  WindowActions,
  CrossInCircleIcon,
  CancelButton,
  RemoveButton,
} from './styles';

// eslint-disable-next-line import/prefer-default-export
export const RemoveTodoWindow = () => {
  const [state, dispatch] = useContext(AuthContext);
  const { ui } = state;
  const handleClose = () => {
    closeRemoveModal(dispatch);
  };

  const handleRemove = () => {
    removeTodo(dispatch, { id: ui.removeTodoModal.todoId });
    handleClose();
  };

  return (
    <Window onClick={(e) => e.stopPropagation()}>
      <CrossInCircleIcon />
      <WindowDescription>{ui.removeTodoModal.description}</WindowDescription>
      <WindowActions>
        <CancelButton onClick={handleClose}>Cancel</CancelButton>
        <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
      </WindowActions>
    </Window>
  );
};
