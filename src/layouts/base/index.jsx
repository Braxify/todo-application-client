import React from 'react';
import PropTypes from 'prop-types';

// Toastify
import { ToastContainer } from 'react-toastify';

// Components
import Header from '../../components/Header/Header';
import { Container } from '../../styles/components';

function Layout({ children }) {
  return (
    <Container>
      <ToastContainer autoClose="3000" />
      {children}
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
