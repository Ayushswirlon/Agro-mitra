import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Services from './Services';
import AboutUs from './AboutUs';
import GovernmentScheme from './GovernmentScheme';
import ContactUs from './Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/GovernmentScheme" element={<GovernmentScheme />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;