import React, {Component} from 'react';

class TextBox extends Component {
  constructor () {
    super ();

    this.state = {
      userInput: ''
    }
  }

  handleChange (userIn) {
    this.setState ({userInput: userIn})
  }

  render () {
    return (
        <div className='puzzleBox evenAndOddPB'>
          <h4>{this.state.userInput}</h4>
          <input className='inputLine' onChange={(e) => this.handleChange (e.target.value)}></input>
        </div>
    )
  }
}

export default TextBox