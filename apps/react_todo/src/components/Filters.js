import React, {PureComponent} from 'react';

const INITIAL_BUTTONS = [
    {label: 'All', active: 'active'},
    {label: 'Active', active: 'none'},
    {label: 'Done', active: 'none'}
];

class Filters extends PureComponent {
    constructor() {
        super();
        this.state = {buttons: INITIAL_BUTTONS};
    }

    buttonElements = () => {
        return this.state.buttons.map(button => <button className={button.active}>{button.label}</button>)
    };

    render() {
        return <nav>{this.buttonElements()}</nav>
    }
}


export default Filters;