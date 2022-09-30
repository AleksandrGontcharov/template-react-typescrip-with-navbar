import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        <Routes>
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Fragment >
  );
}

export default App;
