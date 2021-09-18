import React from 'react';
import { createGlobalStyle } from 'styled-components';

// Context
import { AuthContextProvider } from './context';

// Routing
import Routing from './routing';

// Layout
import Layout from './layouts/base';

// Styles
import MainStyles from './styles/global';

const GlobalStyles = createGlobalStyle`
${MainStyles}
`;

function App() {
  return (
    <AuthContextProvider>
      <Layout>
        <Routing />
      </Layout>
      <GlobalStyles />
    </AuthContextProvider>
  );
}

export default App;
