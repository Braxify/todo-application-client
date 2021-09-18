import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialState, AuthReducer } from './auth/reducer';

export const AuthContext = React.createContext();

// eslint-disable-next-line import/prefer-default-export
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
