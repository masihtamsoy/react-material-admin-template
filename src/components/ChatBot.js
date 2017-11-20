import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';


class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatbot: {
        opened: false
      }
    };
  }

  _toggleChatbotFloating() {
    let prevOpenedState = this.state.chatbot.opened;
    this.setState({chatbot: {opened: !prevOpenedState}});
  }

  render() {
    return (
      <ChatBot
        steps={[
          {
            id: 'hello-world',
            message: 'Hello World!',
            end: true,
          },
        ]}
        opened={this.state.chatbot.opened}
        className={"rsc-float-button"}
        floating={true}
        toggleFloating={this._toggleChatbotFloating.bind(this)}
        disabled={true}
      />
    );
  }
}

export default Chatbot;