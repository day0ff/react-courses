import React from 'react';
import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Header/>
    <Sidebar/>
    <MainPage/>
    <Footer/>
  </div>
);

export default App;
