import React, {Component} from "react"

import Book from "./Book/Book"

class Books extends Component{

    render(){
        return(
            <div>
                {this.props.books.map((book,index)=>{
                    return(
                        <Book 
                        book={book} key={index} 
                        changeHandler={this.props.changeHandler}
                        deleteHandler={this.props.deleteHandler}/>
                    )
                })}
            </div>
        )
    }
} 
export default Books