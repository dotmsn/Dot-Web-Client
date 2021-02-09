import { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.message = 'Hello world';
    }

    render() {
        return (
            <div>
                <h1>{this.message}</h1>
            </div>
        );
    }
}

export default Home;
