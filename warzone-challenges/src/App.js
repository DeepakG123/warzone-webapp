import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import Map from './components/Map/';
import Header from './components/Header/';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Map/>
    </div>
  );
}

export default App;
