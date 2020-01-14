import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      messageLength: ""
    };
  }

  handleOnChange = (e) => {
    this.setState({
      message: e.target.value,
      messageLength: e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          onChange={ e => this.handleOnChange(e)}
          type="text" 
          name="message" 
          id="message" 
          value={this.state.message}/>
        <div>Characters Remaining: {(this.props.maxChars)-(this.state.messageLength)}</div>
      </div>
    );
  }
}

export default TwitterMessage;
