import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: "",
      leftChars: 280
    };
  }

  handleChange = e => {
    this.setState({tweet: e.target.value})
    let leftChars = this.props.maxChars - e.target.value.split('').length
    this.setState({leftChars})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
               value={this.state.tweet}
               onChange={this.handleChange}/>
        <div>Remaining characters: {this.state.leftChars}</div>
      </div>
    );
  }
}

export default TwitterMessage;
