import React, {PureComponent} from 'react';
import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Header/>
        <Sidebar/>
        <MainPage/>
        <Footer/>
      </div>
    )
  }
}

export default App;
