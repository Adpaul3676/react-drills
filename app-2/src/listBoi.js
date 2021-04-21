import React, {Component} from 'react';

class ListBoi extends Component {
  constructor () {
    super ()

    this.state = {
      listArr: [1, 2, 3, 4, 5], 
    }
  }

  

  render () {
    return (
      <div>
        {this.state.listArr.map((number) =>
        <li>{number}</li>
        )}
      </div>
    )
  }
}

export default ListBoi;