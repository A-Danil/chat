import {Message} from 'components';
import { DialogItem } from 'components'
import './Home.scss';

const Home = () => {
  return (
    <section className='home'>
      <div className='dialogs'>
        <DialogItem user={{
          fullname: "Фёдор Достоевский",
          isOnline: true
          }}
          unreaded={0}
        />
        <DialogItem user={{
          fullname: "Фёдор Достоевский",
          isOnline: false
          }}
          unreaded={2}
        />
        <DialogItem user={{
          fullname: "Фёдор Достоевский",
          isOnline: true
          }}
          unreaded={777}
        />
      </div>
      {/* <Dialogs item={[
        {
          user: {
            fullname: "Фёдор Достоевский",
            avatar: null
          },
          message: {
            text: 'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
            isReaded: false,
            created_at: new Date()
          }

        }
      ]} /> */}
      {/* <Message avatar = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          text = 'Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться галльских землях, лол 😄'
          date = '2022-08-22T11:36:22'
          isMe={false}
          attachments={[
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=18nature,water'
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=28nature,water'
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=38nature,water'
            },
          ]}
      />
       <Message avatar = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          text = 'Hello!'
          date = '2022-08-22T13:39:22'
          isMe={true}
          isReaded={true}
      />
      <Message avatar = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          isTyping
      />
      <Message avatar = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          attachments={[
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=18nature,water'
            }
          ]}
      /> */}
    </section>
  );
};

export default Home;