import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  handleOnChange = event =>{
    return this.setState({message: event.target.value})
  
  }

  charsLeft = () =>{
    const length = this.props.maxChars - this.state.message.length
    console.log(length)
    return <p>characters left: {length} </p>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        {this.charsLeft()}
        <input type="text" name="message" value={this.state.message} onChange={this.handleOnChange} id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
