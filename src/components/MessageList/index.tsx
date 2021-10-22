import React from 'react';
import { ScrollView } from 'react-native';
import { Message } from '../Message';

import { styles } from './styles';

export function MessageList() {
  const message = {
    id: '1',
    text: 'Mensagem de texto',
    user: {
      name: 'Ana',
      avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}