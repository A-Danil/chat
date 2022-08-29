import { TeamOutlined, FormOutlined, EllipsisOutlined } from "@ant-design/icons";

import {Messages, Status, ChatInput} from 'components';
import {Dialogs} from 'containers';
import dialogs from 'dialogs.json';

import './Home.scss';

const Home = () => {
  return (
    <section className='home'>
      <div className='chat'>
        <div className='chat__sidebar'>
          <div className='chat__sidebar-header'>
            <div>
              <TeamOutlined />
              <span>Список диалогов</span>
            </div>
            <button>
              <FormOutlined />
            </button>
          </div>

          <div className="chat__sidebar-dialogs">
            <Dialogs
              userID = {0}
              items={dialogs}
            />
          </div>

        </div>

        <div className='chat__dialog'>
          <div className="chat__dialog-header">
            <div/>
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-header-username">Гай Юлий Цезарь</b>
              <div className="chat__dialog-header-status">
                <Status online/>
              </div>
            </div>
            <button>
              <EllipsisOutlined style={{ fontSize: '22px' }}/>
            </button>
          </div>

          <div className="chat__messages">
            <Messages />
          </div>

          <div className="chat__dialog-input">
            <ChatInput/>
          </div>

        </div>
      </div>
     

      
    </section>
  );
};

export default Home;