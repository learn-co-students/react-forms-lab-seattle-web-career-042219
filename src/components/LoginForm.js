import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit = (event) => {
    //console.log(event.target)
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state.username, this.state.password)
    }

  }

  handleChangeUsername = (event) => {
    //console.log(event.target)
    this.setState({
      username: event.target.value
    })
  }

  handleChangePassword = (event) => {
    //console.log(event.target)
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handleChangeUsername} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleChangePassword} id="password" name="password" type="password" value={this.state.password}/>
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
