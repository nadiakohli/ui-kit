import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Typography from 'pages/Typography';

const MainRoutes = () => (
  <Routes>
    <Route path="/typography" element={<Typography />} />
  </Routes>
);

export default MainRoutes;
