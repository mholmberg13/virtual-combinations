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
    strike_four: "",
    strike_five: "",
    three_checked: false,
    four_checked: false,
    five_checked: false
  }


  handleNewCombo = () => {
    let strikes = ["jab", "cross", "hook", "overhand", "upper left", "upper right", "body left", "body right"]
    this.setState({
      strike_one: strikes[Math.floor(Math.random() * strikes.length)],
      strike_two: strikes[Math.floor(Math.random() * strikes.length)],
      strike_three: strikes[Math.floor(Math.random() * strikes.length)]
    })

    if (this.state.four_checked === true) {
      this.setState({
        strike_four: strikes[Math.floor(Math.random() * strikes.length)]
      })
    } else if (this.state.four_checked === false) {
      this.setState({
        strike_four: ""
      })
    }

    if (this.state.five_checked === true) {
      this.setState({
        strike_four: strikes[Math.floor(Math.random() * strikes.length)],
        strike_five: strikes[Math.floor(Math.random() * strikes.length)]
      })
    } else if (this.state.five_checked === false ) {
      this.setState({
        strike_five: ""
      })
    }
  }

  handleStart = () => {
    this.handleNewCombo()
    this.intervalId = setInterval(this.handleNewCombo, 4000)
  }

  handleStop = () => {
    clearInterval(this.intervalId)
  }

  toggleThreeCheck = () => {
    if (this.state.three_checked === false) {
      this.setState({
        three_checked: true
      })
    }
    if (this.state.three_checked === true) {
      this.setState({
        three_checked: false
      })
    }
    console.log(this.state.three_checked)
  }

  toggleFourCheck = () => {
    if (this.state.four_checked === false) {
      this.setState({
        four_checked: true
      })
    }
    if (this.state.four_checked === true) {
      this.setState({
        four_checked: false
      })
    }
    console.log(this.state.four_checked)
  }

  toggleFiveCheck = () => {
    if (this.state.five_checked === false) {
      this.setState({
        five_checked: true
      })
    }
    if (this.state.five_checked === true) {
      this.setState({
        five_checked: false
      })
    }
    console.log(this.state.five_checked)
  }

  render(){
    return (
      <div className="App">
        <Header></Header>
        <Main></Main>
        <input type="checkbox" id="select3" name="select3" value="3 Strike Combos" onChange={this.toggleThreeCheck}/>
        <label for="select3">3 Strike Combos</label><br></br>
        <input type="checkbox" id="select4" name="select4" value="4 Strike Combos" onChange={this.toggleFourCheck}/>
        <label for="select4">4 Strike Combos</label><br></br>
        <input type="checkbox" id="select5" name="select5" value="4 Strike Combos" onChange={this.toggleFiveCheck}/>
        <label for="select5">5 Strike Combos</label><br></br>
        <h2 onClick={this.handleStart}>START</h2>
        <h2 onClick={this.handleStop}>STOP</h2>
        <h3>{this.state.strike_one}</h3>
        <h3>{this.state.strike_two}</h3>
        <h3>{this.state.strike_three}</h3>
        <h3>{this.state.strike_four}</h3>
        <h3>{this.state.strike_five}</h3>
      </div>
    );
  }
}

export default App;
