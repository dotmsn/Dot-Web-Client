import * as React from 'react';

import { IconButton, Input } from '@chakra-ui/react';
import { AiOutlineSend, AiOutlineFile } from 'react-icons/ai';

import styles from './chat-input.module.sass';

export default class ChatInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ input: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmitMessage(this.state.input);
    this.setState({ input: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles['wrapper']}>
          <IconButton icon={<AiOutlineFile className={styles['button']} />} />
          <Input
            placeholder="Write your message..."
            onChange={this.handleInputChange}
            className={styles['input']}
            value={this.state.input}
            variant="outline"
          />
          <IconButton icon={<AiOutlineSend className={styles['button']} />} />
        </form>
      </div>
    );
  }
}
