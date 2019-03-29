import React, {PureComponent} from 'react';

const FILTERS = [
    value => value,
    value => !value.complete,
    value => value.complete
];

class Filters extends PureComponent {
    constructor({buttons, filter}) {
        super();
        this.state = {buttons, filter};
    }

    handleClick = (event) => {
        const buttonId = event.target.id;
        this.setState(({buttons}) => ({
            buttons: buttons.map(button => ({
                ...button,
                active: button.id === +buttonId
            }))
        }));
        return this.state.filter(FILTERS[buttonId]);
    };

    buttonElements = () => {
        return this.state.buttons
            .map(button => (
                <button
                    key={button.id}
                    id={button.id}
                    className={button.active ? 'active' : undefined}
                    onClick={this.handleClick}
                >
                    {button.label}
                </button>
            ))
    };

    render() {
        return <nav>{this.buttonElements()}</nav>
    }
}


export default Filters;