import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Typography from 'pages/Typography';
import Colors from 'pages/Colors';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/typography" element={<Typography />} />
      <Route path="/colors" element={<Colors />} />
    </Routes>
  </Router>
);

export default AppRouter;
