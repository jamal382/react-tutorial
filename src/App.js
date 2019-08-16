import React from 'react';
import logo from './logo.svg';
import './App.css';
import First from './components/First/First'

function App() {
  return (
    <div className="App">
      <First name='jamal' email='jamal.khan@brotecs.com'/>
      <First name='Zabir' email='bdxabir@gmail.com'/>
    </div>
  );
}

export default App;
