import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Typography from 'pages/Typography';
import Iconography from 'pages/Iconography';

const MainRoutes = () => (
  <Routes>
    <Route path="/typography" element={<Typography />} />
    <Route path="/iconography" element={<Iconography />} />
  </Routes>
);

export default MainRoutes;
