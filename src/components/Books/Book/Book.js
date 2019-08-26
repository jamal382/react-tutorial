import React, { Component } from 'react'

class Book extends Component {
    render() {
        return (
                <li className="list-group-item d-flex">
                    <p>{this.props.book.name}</p>           
                    <span className="ml-auto">${this.props.book.price}</span>
                    <div className="mx-4">
                        <span onClick={() => this.props.deleteHandler(this.props.book.id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        </span>
                    </div>
                </li>  
        )
    }
}
export default Book