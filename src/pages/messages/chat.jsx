import * as React from 'react';

import ChatInput from '../../components/forms/input/chat-input';
import Message from '../../components/cards/message/message';
import Header from '../../components/layout/header/header';

export default class Login extends React.Component {
  /*
  constructor(props) {
    super(props);
  }
  */

  render() {
    return (
      <React.Fragment>
        <Header title="Sammwy" description="Online" />
        <div className="container-wrapper">
          <div className="container">
            <Message time="15:31" content="👀 Hola." />
            <Message time="15:33" own="true" content="👋 Hola. ¿Que haces?" />
            <Message
              time="15:34"
              content="💬 Estoy probando Dot, la nueva aplicación de mensajería enfocada a la 🔒 privacidad."
            />
            <Message
              time="15:35"
              own="true"
              content="😮 ¡Que coincidencia! Estoy haciendo lo mismo, te comparto una 📷 foto de un gato."
            />
            <Message
              time="15:35"
              own="true"
              attachment="https://pbs.twimg.com/media/Ez-AaifWYAIiFSQ.jpg"
            />
            <Message time="15:38" content="ʕ•́ᴥ•̀ʔっ Owww, que mono ❤️." />
          </div>
        </div>
        <ChatInput />
      </React.Fragment>
    );
  }
}
