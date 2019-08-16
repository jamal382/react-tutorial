import React, { Component } from 'react';

class First extends Component {
    render() {
        return (
            <div>
                <h1>I am a {this.props.name} </h1>
                <b>My email is {this.props.email}</b>
            </div>

        )
    }
}

export default First