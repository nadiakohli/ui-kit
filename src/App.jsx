import React from 'react';

// Rotes
import MainRoutes from 'routes/MainRoutes';

// Theme
import Theme, { GlobalStyle } from 'styles/Theme';

const App = () => (
  <Theme>
    <MainRoutes />
    <GlobalStyle />
  </Theme>
);

export default App;
