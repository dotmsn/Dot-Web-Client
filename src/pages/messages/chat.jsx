import * as React from 'react';

import ChatInput from '../../components/forms/input/chat-input';
import Message from '../../components/cards/message/message';
import Header from '../../components/layout/header/header';
import { Center, Spinner } from '@chakra-ui/react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [],
      fetched: false,
    };

    this.onSubmitMessage = this.onSubmitMessage.bind(this);
    this.ref = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        fetched: true,
        history: [
          {
            id: '0',
            time: '15:31',
            content: '👀 Hola.',
          },

          {
            id: '1',
            time: '15:33',
            content: '👋 Hola. ¿Que haces?',
            own: true,
          },

          {
            id: '2',
            time: '15:34',
            content:
              '💬 Estoy probando Dot, la nueva aplicación de mensajería enfocada a la 🔒 privacidad.',
          },

          {
            id: '3',
            time: '15:35',
            content:
              '😮 ¡Que coincidencia! Estoy haciendo lo mismo, te comparto una 📷 foto de un gato.',
            own: true,
          },

          {
            id: '4',
            time: '15:35',
            attachment: 'https://pbs.twimg.com/media/Ez-AaifWYAIiFSQ.jpg',
            own: true,
          },

          {
            id: '5',
            time: '15:38',
            content: 'ʕ•́ᴥ•̀ʔっ Owww, que mono ❤️.',
          },
        ],
      });
    }, 1000 * 2);
  }

  onSubmitMessage(message) {
    const history = this.state.history;
    history.push({
      id: history.length,
      content: message,
      own: true,
    });
    this.setState({ history });
  }

  componentDidUpdate() {
    const history = this.state.history;
    const lastMessage = history[history.length - 1];
    if (lastMessage && lastMessage.own) {
      const elem = document.getElementById(lastMessage.id);
      elem.scrollIntoView();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header title="Sammwy" description="Online" />
        {!this.state.fetched ? (
          <Center mt={20}>
            <Spinner />
          </Center>
        ) : (
          <div className="container-wrapper">
            <div className="container">
              {this.state.history.map((value) => {
                return (
                  <Message
                    time={value.time}
                    own={value.own ? value.own.toString() : 'false'}
                    content={value.content}
                    attachment={value.attachment}
                    key={value.id}
                    id={value.id}
                  />
                );
              })}
            </div>
          </div>
        )}
        <ChatInput onSubmitMessage={this.onSubmitMessage} />
      </React.Fragment>
    );
  }
}
