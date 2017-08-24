import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super();
        this.count = props.match.params.count || 1;

        console.log('Count: ', this.count);
    }

    render() {
        let msgs = [];
        for (let i = 0; i < this.count; i++) {
            msgs.push(
                <div style={{textAlign: 'center'}} key={i}>
                    <h1>Dormammu, I've come to bargain</h1>
                </div>);
        }

        return (
            <div>
                {msgs}
            </div>
        )
    }
}