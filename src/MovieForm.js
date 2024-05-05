import React, { Component } from 'react';

class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render() {
        const { submitForm } = this.props;

        const { text } = this.state;
        return (
                <form data-testid="movie-form" onSubmit={() => submitForm({ text })}>
                    <label htmlFor="text">Text
                        <input 
                            id="text" 
                            name="text" 
                            value={text} 
                            onChange={e => this.setState({ text: e.target.value })} 
                            type="text" 
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
        );
    }
}

export default MovieForm;