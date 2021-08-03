import * as React from 'react';

import ChatInput from '../../components/forms/input/chat-input';
import Message from '../../components/cards/message/message';
import Header from '../../components/layout/header/header';
import { Badge, Center, Spinner } from '@chakra-ui/react';

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
            content: '#  Header 1',
          },

          {
            id: '999',
            own: true,
            time: '15:31',
            content: '##  Header 2',
          },

          {
            id: '99',
            time: '15:31',
            content: '###  Header 3',
          },

          {
            id: '9',
            own: true,
            time: '15:31',
            content: '####  Header 4',
          },

          {
            id: '9',
            time: '15:31',
            content: '#####  Header 5',
          },

          {
            id: '1',
            time: '15:33',
            content: 'Testing **bold**',
            own: true,
          },

          {
            id: '2',
            time: '15:34',
            content: 'Now testing __italic__',
          },

          {
            id: '5',
            time: '15:38',
            own: true,
            content: '> This is a quote',
          },
          {
            id: '6',
            time: '15:40',
            own: false,
            content:
              'And this an emote ![](https://i.pinimg.com/originals/4f/d7/10/4fd710b5eda64424ca7d609e0d3141df.png) YEE!',
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
        <Header
          title="Sammwy"
          description={
            <Badge px={2} mt={1} variant="subtle" colorScheme="green">
              Online
            </Badge>
          }
        />
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
