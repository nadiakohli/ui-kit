import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Typography from 'pages/Typography';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/typography" element={<Typography />} />
    </Routes>
  </Router>
);

export default AppRouter;
