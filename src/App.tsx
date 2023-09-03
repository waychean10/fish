import React from 'react';
import { MainBody } from './components/MainBody';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
      <Router>
        <MainBody />
      </Router>
  );
}

export default App;
