import { useState } from 'react';
import { Input } from 'antd';
import { SmileOutlined, CameraOutlined, SendOutlined, AudioOutlined} from "@ant-design/icons";

import PropTypes from 'prop-types';

import './ChatInput.scss';

const ChatInput = (props) => {
  const [value, setValue] = useState('');

  return (
    <div className='chat-input'>
      <div className='chat-input__smile-btn'>
        <button>
          <SmileOutlined style={{ fontSize: '20px'}} />
        </button>
      </div>
      <Input onChange={(e)=>{setValue(e.target.value)}} size="large"  placeholder="Введите текст сообщения" />
      <div className='chat-input__actions'>
        <button>
          <CameraOutlined  style={{ fontSize: '20px'}} />
        </button>
        <button>
          {value ? <SendOutlined  style={{ fontSize: '20px'}} /> : <AudioOutlined  style={{ fontSize: '20px'}} />}
        </button>
      </div>
    </div>
  )
}

// DialogInput.propTypes = {
//   className: PropTypes.string
// }

export default ChatInput;