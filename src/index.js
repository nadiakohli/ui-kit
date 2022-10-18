import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'App';
import 'index.css';

// Theme
import Theme, { GlobalStyle } from 'helpers/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Theme>
      <App />
      <GlobalStyle />
    </Theme>
  </Router>,
);
