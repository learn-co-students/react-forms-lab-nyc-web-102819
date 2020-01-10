import React from "react"

class TwitterMessage extends React.Component {
  state = {
      message: ""
    }
  

  handleMsgChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    // console.log(this.state.message)

    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleMsgChange(event)} type="text" name="message" id="message" value={this.state.message} />
        {this.props.maxChars-this.state.message.length}
      </div>
    )
  }
}

export default TwitterMessage
