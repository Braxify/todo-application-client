import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import { AuthContext } from '../../context';
import { closeEditModal, closeRemoveModal } from '../../context/auth/actions';
import { StyledModal } from './styles';

// eslint-disable-next-line import/prefer-default-export
export const Modal = ({ children, isOpen }) => {
  const [state, dispatch] = useContext(AuthContext);

  const handleClose = () => {
    closeEditModal(dispatch);
    closeRemoveModal(dispatch);
  };

  return ReactDOM.createPortal(
    <StyledModal isOpened={isOpen} onClick={handleClose}>
      {children}
    </StyledModal>,
    document.getElementById('modal-root')
  );
};
