import React from 'react';
import { ChatEngine } from 'react-chat-engine'
import './App.css';
import ChatFeed from './compoments/ChatFeed/ChatFeed';
import LoginForm from './compoments/LoginForm/LoginForm';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (

    <ChatEngine
      height = '100vh'
      projectID = '78b000a0-eec8-4e55-8940-2ca73cf402e7'
      userName = {localStorage.getItem('username')}
      userSecret = {localStorage.getItem('password')}
      renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps} />}
    />
  );
}

export default App;
