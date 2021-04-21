import React, {Component} from 'react';
import './App.css';

class Login extends Component {
  constructor () {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange (e) {
    this.setState ({username: e})
  }

  handleChange2 (e) {
    this.setState ({password: e})
  }

  showInfo (user, pass) {
    alert (`Logging in as ${user} with the password ${pass}`)
  }

  render() {
    return (
      <section>
        <div className='container1'>
          <input className='inputField' onChange={(e) => {this.handleChange(e.target.value)}} placeholder='username'></input>
          <input className='inputField' onChange={(e) => {this.handleChange2(e.target.value)}} placeholder='password'></input>
          <button className='confirmationButton' onClick={() => {this.showInfo (this.state.username, this.state.password)}}>Login</button>
        </div>
      </section>
    )
  }
}

export default Login;