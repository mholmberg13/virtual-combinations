import React from 'react';

class ComboBox extends React.Component {
    state = {
        
    }

    render () {
        return (
            <div>
                <h3>{this.props.strike_one}</h3>
                <h3>{this.props.strike_two}</h3>
                <h3>{this.props.strike_three}</h3>
                <h3>{this.props.strike_four}</h3>
                <h3>{this.props.strike_five}</h3>
            </div>
        )
    }
}

export default ComboBox;