import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      content: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  charRemaining = () => {
    return this.props.maxChars - this.state.content.length
  }
  

  render() {
    return (
      <div>
        <div>
          <strong>Your message:</strong>
          <input type="text" name="message" id="message" onChange={this.handleChange} 
          value={this.state.content} />
        </div>
        <div>
        {this.charRemaining()}
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
