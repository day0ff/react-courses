import React, {PureComponent} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import Books from './components/Books/Books';
import Cart from "./components/Cart";
import Login from "./components/Login";
import Book from "./components/Books/Book";

const INIT_LOGIN = {isLogin: false};

class App extends PureComponent {
  constructor() {
    super();
    this.state = {...INIT_LOGIN};
  }

  handleLogin = () => {
    this.setState({isLogin: !this.state.isLogin});
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation isLogin={this.state.isLogin}/>
          <article>
            <Route path="/" component={MainPage} exact/>
            <Route path="/books" component={Books} exact/>
            <Route path="/books/:id" component={Book} exact/>
            <Route path="/cart" render={()=> <Cart {...this.state}/>} exact/>
            <Route path="/login" render={() => <Login {...this.state} handleLogin={this.handleLogin}/>} exact/>
          </article>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
