import React from 'react';
import ComboBox from './ComboBox.js'
import StartStop from './StartStop.js'
import Checkboxes from './Checkboxes.js'

class Main extends React.Component {
    render () {
        return (
            <div>
                <Checkboxes
                    toggleFourCheck={this.props.toggleFourCheck}
                    toggleFiveCheck={this.props.toggleFiveCheck}
                />
                <StartStop
                    handleStart={this.props.handleStart}
                    handleStop={this.props.handleStop}
                    handleNewCombo={this.props.handleNewCombo}
                />
                <ComboBox
                    strike_one={this.props.strike_one}
                    strike_two={this.props.strike_two}
                    strike_three={this.props.strike_three}
                    strike_four={this.props.strike_four}
                    strike_five={this.props.strike_five}
                />
            </div>
        )
    }
}

export default Main;