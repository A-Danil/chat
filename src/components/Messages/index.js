import PropTypes from 'prop-types';
import { Empty } from 'antd';

import { Message } from '../';

const Messages = ({ items }) => {

  return (
    items ? 
      <div>
              <Message 
                avatar = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                date = '2022-08-22T11:36:22'
                audio = 'https://notificationsounds.com/storage/sounds/file-sounds-1163-access-granted-computer-voice.mp3'
              />
              <Message 
                avatar = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                text = 'Hello!'
                date = '2022-08-22T13:39:22'
                isMe={true}
                isReaded={true}
              />
              <Message 
                avatar = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                attachments={[
                  {
                    filename: 'image.jpg',
                    url: 'https://source.unsplash.com/100x100/?random=18nature,water'
                  }
                ]}
              />
              <Message 
                avatar = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                date = '2022-08-22T11:36:22'
                audio = 'https://notificationsounds.com/storage/sounds/file-sounds-1163-access-granted-computer-voice.mp3'
              />
              <Message 
                avatar = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                date = '2022-08-22T11:36:22'
                audio = 'https://notificationsounds.com/storage/sounds/file-sounds-1163-access-granted-computer-voice.mp3'
              />
              <Message 
                avatar = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                date = '2022-08-22T11:36:22'
                audio = 'https://notificationsounds.com/storage/sounds/file-sounds-1163-access-granted-computer-voice.mp3'
              />
              <Message 
                avatar = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                date = '2022-08-22T11:36:22'
                audio = 'https://notificationsounds.com/storage/sounds/file-sounds-1163-access-granted-computer-voice.mp3'
              />
              <Message 
                avatar = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                date = '2022-08-22T11:36:22'
                audio = 'https://notificationsounds.com/storage/sounds/file-sounds-1163-access-granted-computer-voice.mp3'
              />
              <Message 
                avatar = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                date = '2022-08-22T11:36:22'
                audio = 'https://notificationsounds.com/storage/sounds/file-sounds-1163-access-granted-computer-voice.mp3'
              />
              <Message 
                avatar = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                date = '2022-08-22T11:36:22'
                audio = 'https://notificationsounds.com/storage/sounds/file-sounds-1163-access-granted-computer-voice.mp3'
              />
      </div> : 
    <Empty description='Нет сообщений'/>
  )
}

Messages.propTypes = {
  items: PropTypes.array
}

export default Messages;