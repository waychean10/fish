import React from 'react';
import { Header } from './components/Header';
import { MainBody } from './components/MainBody';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
      <Router>
        <Header />
        <MainBody />
      </Router>
  );
}

export default App;
