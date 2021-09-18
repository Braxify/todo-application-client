import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../context';

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ component, ...args }) {
  const [state, dispatch] = useContext(AuthContext);

  return state.userInfo?.token ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route component={component} {...args} />
  ) : (
    <Redirect to="/login" />
  );
}
