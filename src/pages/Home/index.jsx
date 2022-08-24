import {Message, Dialogs} from 'components';

import './Home.scss';

const Home = () => {
  return (
    <section className='home'>
      <Dialogs 
        userID = {0}
        items ={[
          {
            _id: 'ged358a7da3cc760364909d4aaf7321e',
            text: 'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
            created_at: new Date(),
            user: {
               _id: 'a7f1fe439d0e5040c3db4936329b9d14',
               fullname: "Фёдор Достоевский",
               avatar: null
            },
          },
          {
            _id: '8ey358a7da3cc760364909d4aaf7321e',
            text: 'Привет, как твои дела?',
            created_at: new Date(2021, 1, 1),
            user: {
              _id: '8eu358a7da3cc760364909d4aaf7321e',
              fullname: "Алан Тьюринг",
              avatar: 'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2012/06/21/120621113907__60957018_turingdrawing_-_copy.jpg'
            },
          }
      ]} />
      <Message avatar = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          date = '2022-08-22T11:36:22'
          audio = 'https://notificationsounds.com/storage/sounds/file-sounds-1163-access-granted-computer-voice.mp3'
      />
       {/* <Message avatar = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
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