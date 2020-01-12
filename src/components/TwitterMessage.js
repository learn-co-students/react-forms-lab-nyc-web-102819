import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  updateTweetState = event => {
    this.setState({
      tweet: event.target.value
    })
  }

  renderCharsAvailable = () => {
    return this.props.maxChars - this.state.tweet.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.updateTweetState} type="text" name="message" id="message" value={this.state.tweet}/>
        <h1>{this.renderCharsAvailable()}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
