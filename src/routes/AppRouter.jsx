import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Typography from 'pages/Typography';
import Colors from 'pages/Colors';

const AppRouter = () => (
  <Routes>
    <Route path="/typography" element={<Typography />} />
    <Route path="/colors" element={<Colors />} />
  </Routes>
);

export default AppRouter;
