import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 10,
            color: 'black'
        }

    }

    decrease = () => {

        console.log('pre-decrease::',this.state.count)

        this.setState({
            count: this.state.count - 1
        })

        console.log('decrease::',this.state.count)

        if (this.state.count <= 5) {
            this.setState({
                color: 'red'
            })
        } else if (this.state.count >= 15) {
            this.setState({
                color: 'green'
            })

        } else {
            this.setState({ color: 'black' })
        }
    }

    increase = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log('increase:',this.state.count)
        if (this.state.count <= 5) {
           
            this.setState({
                color: 'red'
            })
        } else if (this.state.count >= 15) {
            this.setState({
                color: 'green'
            })

        } else {
            this.setState({ color: 'black' })
        }
    }


    render() {
        return (
            <div>
                <h1 style={{ color: this.state.color }}>
                <button onClick={this.decrease}>-</button>
                {console.log(this.state.count)}
                    {this.state.count}
                <button onClick={this.increase}>+</button>
                </h1>
            </div>
        )
    }
}

export default Counter