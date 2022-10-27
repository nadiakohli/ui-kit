import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Typography from 'pages/Typography';
import Buttons from 'pages/Buttons';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/typography" element={<Typography />} />
      <Route path="/buttons" element={<Buttons />} />
    </Routes>
  </Router>
);

export default AppRouter;
