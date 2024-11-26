import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import DoctorConsultation from './pages/DoctorConsultation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    {/* You can switch to FAQ or DoctorConsultation to test */}
    {/* <FAQ /> */}
    {/* <DoctorConsultation /> */}
  </React.StrictMode>
);
