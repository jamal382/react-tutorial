import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './components/First/First'
import Counter from './components/Counter/Counter'
import Example from './components/Example'
import Books from './components/Books/Books'


class App extends Component {
  state = {
    books:[
      {
        name: 'JavaScript',
        price: '20',
        id:1
      },
      {
        name: 'React',
        price: '33',
        id:2
      },
      {
        name: 'React Native',
        price: '48',
        id:3
      }
    ]
  }

  deleteHandler = (id) => {
     let newBooks = this.state.books.filter(book => book.id != id)
      this.setState({
        books:newBooks
      })
  }

  changeHandler = (name,id) =>{
    let newbooks = this.state.books.map(book=>{
      if(id==book.id){
        return({
          ...book,
          name
        })
      }

      return book
    })

    this.setState({
      books:newbooks
    })

  }
    persons = [
      { name: 'Jamal', email: 'jamal.khan@brotecs.com' },
      { name: 'Zabir', email: 'bdxabir@gmail.com' },
      { name: 'Raiyan', email: 'raiyankhan@brotecs.com' }
    ]
  
  render() {
    let obj = {padding:'30px',textAlign:'right',fontFamily:'Arial',fontSize:'100px'}
    return (
      <div className="App">
       
         {
          this.persons.map(
            (people, index) => {
              return (
                <First key={index} name={people.name} email={people.email} />
              )
            }
          )
        }
        <Counter/>
        <Example/>
        <h1 style={{padding:'30px',textAlign:'left',fontFamily:'Arial',fontSize:'100px'}}>Hello Programmers.</h1>
        <h1 style={obj}> Working with Styles</h1>
        <Books 
        changeHandler={this.changeHandler.bind(this)} 
        deleteHandler = { this.deleteHandler.bind(this) } 
        books = {this.state.books} />
      </div>
    );
  }
}

export default App;
