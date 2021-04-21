import React, {Component} from 'react';

class List extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <p>ToDo: {this.props.listItems}</p>
    )
  }
}

export default List;