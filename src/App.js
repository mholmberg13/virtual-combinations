import React from 'react';
import logo from './logo.svg';
import Header from './components/Header.js'
import Main from './components/Main.js'
import './App.css';

class App extends React.Component {

  state = {
    strike_one: "",
    strike_two: "",
    strike_three: "",
    strike_four: ""
  }


  handleNewCombo = () => {
    let strikes = ["jab", "cross", "hook", "overhand", "upper left", "upper right", "body left", "body right"]
    this.setState({
      strike_one: strikes[Math.floor(Math.random() * strikes.length)],
      strike_two: strikes[Math.floor(Math.random() * strikes.length)],
      strike_three: strikes[Math.floor(Math.random() * strikes.length)]
    })
  }

  handleStart = () => {
    this.handleNewCombo()
    this.intervalId = setInterval(this.handleNewCombo, 4000)
  }

  handleStop = () => {
    clearInterval(this.intervalId)
  }

  render(){
    return (
      <div className="App">
        <Header></Header>
        <Main></Main>
        <input type="checkbox" id="select3" name="select3" value="3 Strike Combos"/>
        <label for="select3">3 Strike Combos</label><br></br>
        <input type="checkbox" id="select4" name="select4" value="4 Strike Combos"/>
        <label for="select4">4 Strike Combos</label><br></br>
        <input type="checkbox" id="select5" name="select5" value="4 Strike Combos"/>
        <label for="select5">5 Strike Combos</label><br></br>
        <h2 onClick={this.handleStart}>START</h2>
        <h2 onClick={this.handleStop}>STOP</h2>
        <h3>{this.state.strike_one}</h3>
        <h3>{this.state.strike_two}</h3>
        <h3>{this.state.strike_three}</h3>
      </div>
    );
  }
}

export default App;
