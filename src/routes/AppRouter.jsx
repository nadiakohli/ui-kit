import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Typography from 'pages/Typography';
import Iconography from 'pages/Iconography';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/typography" element={<Typography />} />
      <Route path="/iconography" element={<Iconography />} />
    </Routes>
  </Router>
);

export default AppRouter;
