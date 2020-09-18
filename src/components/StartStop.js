import React from 'react';


class StartStop extends React.Component {

    render() {
        return (
            <div>
                <h2 onClick={this.props.handleStart}>START</h2>
                <h2 onClick={this.props.handleStop}>STOP</h2>
            </div>
        )
    }

}

export default StartStop;