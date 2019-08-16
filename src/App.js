import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './components/First/First'

class App extends Component {

  state = {
    persons: [
      { name: 'Jamal', email: 'jamal.khan@brotecs.com' },
      { name: 'Zabir', email: 'bdxabir@gmail.com' },
      { name: 'Raiyan', email: 'raiyankhan@brotecs.com' }
    ]
  }

  render() {
    return (
      <div className="App">
        {
          this.state.persons.map(
            (people, index) => {
              return (
                <First name={people.name} email={people.email} />
              )
            }
          )
        }
      </div>
    );
  }
}

export default App;
