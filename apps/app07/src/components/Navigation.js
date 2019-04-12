import React, {PureComponent} from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends PureComponent {
  render() {
    return (
      <nav className="Navigation">
        <NavLink to="/" className="nav" activeClassName="nav-active" exact>Home</NavLink>
        <NavLink to="/books" className="nav" activeClassName="nav-active">Books</NavLink>
        <NavLink to="/cart" className="nav" activeClassName="nav-active">Cart</NavLink>
        <NavLink to="/login" className="nav" activeClassName="nav-active">{this.props.isLogin?'Logout':'Login'}</NavLink>
      </nav>
    )
  }
}

export default Navigation;
