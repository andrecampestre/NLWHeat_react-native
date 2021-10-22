import React from 'react';
import { View } from 'react-native';

import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SingInBox } from '../../components/SingInBox';
import { SendMessageForm } from '../../components/SendMessageForm';

import { useAuth } from '../../components/useAuth';

import { styles } from './style';

export function Home() {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />

      {user ? <SendMessageForm /> : <SingInBox />}
    </View>
  )
}