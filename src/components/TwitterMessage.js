import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      remaining: this.props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
      remaining: this.state.remaining - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>{this.state.remaining}</p>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.message}/>
      </div>
    );
  }
}


export default TwitterMessage;
