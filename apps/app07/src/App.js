import React, {PureComponent} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import Navigation from './components/Navigation/Navigation';
import MainPage from './components/MainPage/MainPage';
import Books from './components/Books/Books';
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation/>
          <Route path="/" component={MainPage} exact/>
          <Route path="/books" component={Books} exact/>
          <Route path="/cart" component={Cart} exact/>
          <Route path="/login" component={Login} exact/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
