import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import TopBanner from './Banner';
import Clock from './Clock';
import { Header } from './Header';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { Podcast } from './Podcast';
import MovieList from './Moives';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/Podcast" element={<Podcast />} />
        <Route path="/Movies" element={<MovieList />} />
      </Routes>
      <Clock />
    </div>
  );
}

export default App;
