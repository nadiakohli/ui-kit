import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Typography from 'pages/Typography';
import Buttons from 'pages/Buttons';

const MainRoutes = () => (
  <Routes>
    <Route path="/typography" element={<Typography />} />
    <Route path="/buttons" element={<Buttons />} />
  </Routes>
);

export default MainRoutes;
