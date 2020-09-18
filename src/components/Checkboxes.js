import React from 'react';

class Checkboxes extends React.Component {

    render() {
        return(
            <div>
                <input type="checkbox" id="select4" name="select4" value="4 Strike Combos" onChange={this.props.toggleFourCheck}/>
                <label for="select4">4 Strike Combos</label><br></br>
                <input type="checkbox" id="select5" name="select5" value="4 Strike Combos" onChange={this.props.toggleFiveCheck}/>
                <label for="select5">5 Strike Combos</label><br></br>
            </div>
        )
    }

}

export default Checkboxes;