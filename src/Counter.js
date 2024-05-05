//create a class using react class component in a create-react-app that counts a number up on click
import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <p data-testid="counter-display">{this.state.count}</p>
                <button data-testid="counter-button" onClick={() => this.setState((prev) => ({ count: prev.count + 1 }))}>
                    Click me
                </button>
            </div>
        );
    }
}

export default Counter;