import React, {PureComponent} from 'react';
import Search from './Search';
import logo from '../images/logo.png'

class Header extends PureComponent {
    render() {
        return (
            <header>
                <img src={logo} alt="SENLA"/>
                <Search/>
            </header>
        )
    }
}


export default Header;