import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled('button')`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 128.4%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #ffffff;
  width: 100%;
  padding: 19px 0;
  background: #3290ff;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid #3290ff;
  transition: background-color 0.5s, color 0.2s;
  &:not(:disabled):hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: #3290ff;
    transition: background-color 0.5s, color 0.2s;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

const FormButton = ({ children, onClick, disabled }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

FormButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

FormButton.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default FormButton;
