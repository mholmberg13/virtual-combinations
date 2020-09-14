import React from 'react';
import logo from './logo.svg';
import Header from './components/Header.js'
import Main from './components/Main.js'
import './App.css';

class App extends React.Component {

  state = {
    strike_one: "",
    strike_two: "",
    strike_three: ""
  }


  handleNewCombo = () => {
    let strikes = ["jab", "cross", "hook", "overhand", "upper left", "upper right", "body left", "body right"]
    this.setState({
      strike_one: strikes[Math.floor(Math.random() * strikes.length)],
      strike_two: strikes[Math.floor(Math.random() * strikes.length)],
      strike_three: strikes[Math.floor(Math.random() * strikes.length)]
    })
  }

  render(){
    return (
      <div className="App">
        <Header></Header>
        <Main></Main>
        <h2 onClick={this.handleNewCombo}>New Combo</h2>
        <h3>{this.state.strike_one}</h3>
        <h3>{this.state.strike_two}</h3>
        <h3>{this.state.strike_three}</h3>
      </div>
    );
  }
}

export default App;
