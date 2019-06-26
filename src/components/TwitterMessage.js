import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: "",
      maxChars: this.props.maxChars
    };
  }

  handleChange = e => {
    this.setState({
      tweet: e.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.tweet}
          onChange={this.handleChange}
        />
        <span>
          <strong>
            Characters Remaining:{" "}
            {this.props.maxChars - this.state.tweet.length}
          </strong>
        </span>
      </div>
    );
  }
}

export default TwitterMessage;
