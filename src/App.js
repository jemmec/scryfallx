import React, { Component } from 'react';
import './App.css';
import './scryfall-dark.css';

import CardProfile from './Components/CardProfile';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>
            Scryfall X
          </h2>
          <CardProfile/>
          <Footer/>
      </div>
    );
  }
}

export default App;
