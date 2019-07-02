import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  handleChange = (ev) =>{
    this.setState({
      value: ev.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value = {this.state.value} onChange = {this.handleChange} type="text" name="message" id="message" />
        <br></br>
        <strong>Remaining Characters:</strong>
        <h4>{140 - parseInt(this.state.value.length)}</h4>
      </div>
    );
  }
}

export default TwitterMessage;
