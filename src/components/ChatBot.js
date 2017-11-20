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
  

  componentDidMount() {
    document.getElementsByClassName('rsc-input')[0].disabled = false;
    // document.getElementsByClassName('rsc-submit-button')[0].disabled = false;
    
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
          id: '1',
          message: 'What is your name?',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Hi {previousValue}, nice to meet you!',
          end: true,
        },
        ]}
        opened={this.state.chatbot.opened}
        className={"rsc-float-button"}
        floating={true}
        toggleFloating={this._toggleChatbotFloating.bind(this)}
        disabled={true}
        recognitionEnable={true}
      />
    );
  }
}

export default Chatbot;