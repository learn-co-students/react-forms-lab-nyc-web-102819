import React from "react";

const initialState = {
  username: "",
  password: ""
}

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = initialState
  }

  handleOnChange = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state)
    }
    this.setState(initialState)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              onChange={this.handleOnChange}
              id="username" 
              name="username" 
              type="text" 
              value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              onChange={this.handleOnChange}
              id="password" 
              name="password" 
              type="password" 
              value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
