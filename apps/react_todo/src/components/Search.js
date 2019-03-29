import React, {PureComponent} from 'react';
import search from '../images/Search.png'

class Search extends PureComponent {
    render() {
        return (
            <form>
                <input type="image" name="search" src={search}/>
                <input type="search" placeholder="Search task for to do"/>
            </form>
        )
    }
}


export default Search;