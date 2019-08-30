import React, { Component } from 'react'
import './App.css'
import Axios from 'axios';
class App extends Component {
  state = {
    posts:[]
  }

 componentDidMount(){
   Axios.get("https://jsonplaceholder.typicode.com/posts")
   .then(res =>{
     this.setState({
       posts: res.data
     })
   }).catch(err => console.log(err))
 }
  render() {
    //  console.log(this.state)
   let {posts} = this.state
    return (
      <div className="container">
        <ul className="list-group">
          {posts.map(post => <li key={post.id} className="list-group-item">{post.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default App