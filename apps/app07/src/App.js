import React, {PureComponent} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Navigation/>
          <Sidebar/>
          <Route path="/" component={MainPage} exact/>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
