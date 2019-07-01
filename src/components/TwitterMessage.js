import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    console.log(this.props)
    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" id="message" onChange={event => this.handleMessageChange(event)} value={this.state.message} />
        <strong>{this.props.maxChars - this.state.message.length}</strong>
      </div> 
      )
  }

  handleMessageChange = (ev) => {
    this.setState({
      message: ev.target.value
    })
  }

}

export default TwitterMessage;
