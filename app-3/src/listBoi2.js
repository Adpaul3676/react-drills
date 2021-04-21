import React, {Component} from 'react';

class ListBoi extends Component {
  constructor () {
    super ()

    this.state = {
      userInput: [],
      listArr: ['1', '3', '4', '5', '4', '8', '3', '4', '1', '9', '0', '6', '6', '3', '4', '1', '7', '3', '4', '3', '5', '9'], 
      filteredArr: []
    }
  }
  
filterTheNums (x) {
  // this.setState ({filteredArr: []})
  let listArr = this.state.listArr
  let filteredArr = []
  for (let i = 0; i < listArr.length; i++) {
    if (x !== listArr[i]) {
      filteredArr.push (listArr[i])
    }
  }
  this.setState ({filteredArr: filteredArr})
}

  handleChange(e) {
    this.setState ({userInput: e})
    // console.log (this.state.user)
  }

  reset () {
    this.setState ({filteredArr: []})
  }

  render () {
    return (
      <div className='pageFlow'>
        <section className='listFlow'>
        Unfiltered: {this.state.listArr.map((number) =>
        <ul>{number}</ul>
        )}
        </section>
        <section className='listFlow'>Filtered: {this.state.filteredArr.map((number) =>
        <ul>{number}</ul>
        )}
        </section>
        <input onChange={(e) => this.handleChange(e.target.value)}></input>
        <button className='largerButton' onClick={() => {this.filterTheNums (this.state.userInput)}}>Filter</button>
        <button className='largerButton' onClick={() => {this.reset()}}>Reset</button>
      </div>
    )
  }
}

export default ListBoi;