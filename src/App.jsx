import React from 'react';

// Theme
import Theme, { GlobalStyle } from 'helpers/Theme';

// Rotes
import AppRouter from 'routes/AppRouter';

const App = () => (
  <Theme>
    <AppRouter />
    <GlobalStyle />
  </Theme>
);

export default App;
