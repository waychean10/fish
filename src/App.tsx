import React from 'react';
import { Header } from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
      </Routes>
    </Router>
  );
}

export default App;
