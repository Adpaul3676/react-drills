import React, {Component} from 'react';
import List from './list.js'

class Smallapp extends Component {
  constructor () {
    super()

    this.state = {
      // listItems: '',
      userInput: '',
      listDisplay: []
    }
  }

  handleChange (e) {
   this.setState ({userInput: e})
  //  console.log (this.state.userInput)
  }

  addTask (input) {
    // this.setState ({listItems: input})
    this.setState ({listDisplay: this.state.listDisplay.concat(` ${input},`)})
    // this.setState ({userInput: ''})
  }

  reset () {
    this.setState ({listDisplay: []})
  }

  render () {
    return (
      <div className="App">
        <List listItems={this.state.listDisplay}/>
        <section>
          <input placeholder='Add new task' onChange={(e) => {this.handleChange(e.target.value)}}></input>
          <button onClick={() => {this.addTask(this.state.userInput)}}>Add new task</button>
          <button onClick={() => {this.reset()}}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Smallapp;
