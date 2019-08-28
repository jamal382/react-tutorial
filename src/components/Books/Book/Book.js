import React, { Component } from 'react'

class Book extends Component {

    state ={
        isEditable:false
    }

    changeKeyHandler = (event)=>{
        if(event.key == 'Enter'){
            this.setState({
                isEditable:false
            })
        }
    }

    render() {
        let output = this.state.isEditable?
        <input 
        onChange={e=>
            this.props.changeHandler(e.target.value,this.props.book.id)
        }
        onKeyPress={this.changeKeyHandler}
        type="text" 
        placeholder="Enter Name" 
        value={this.props.book.name}
        />
        : <p>{this.props.book.name}</p>

        return (
                <li className="list-group-item d-flex">
                    <p onDoubleClick={()=>this.setState({isEditable:true})}>{output}</p>           
                    <span className="ml-auto">${this.props.book.price}</span>
                    <span style={{cursor:'pointer'}} onClick={()=>this.setState({isEditable:true})} className="mx-4"> <i className="fa fa-edit" aria-hidden="true"></i> </span>
                    <div>
                        <span style={{cursor:'pointer'}} onClick={() => this.props.deleteHandler(this.props.book.id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        </span>
                    </div>
                </li>  
        )
    }
}
export default Book