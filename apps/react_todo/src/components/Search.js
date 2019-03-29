import React, {PureComponent} from 'react';
import logo from '../images/logo.png'
import search from '../images/Search.png'

class Search extends PureComponent {
    constructor({search}) {
        super();
        this.state = {search, value: ''};
    }

    handleChange = event => {
        const value = event.target.value;
        this.setState(() => ({value}));
        return this.state.search(variable => variable.task.includes(value));
    };

    render() {
        return (
            <header>
                <img src={logo} alt="SENLA"/>
                <input type="image" name="search" alt="search" src={search} disabled/>
                <input
                    type="search"
                    placeholder="Search task for to do"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </header>
        )
    }
}


export default Search;