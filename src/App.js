import React, { Component } from 'react';
import './App.css';
import './scryfall-dark.css';

import CardProfile from './Components/CardProfile';


class App extends Component {
  constructor(props)
  {
    super(props);
  }


  render() {
    return (
      <div className="App">
          <CardProfile/>
      </div>
    );
  }
}

export default App;
