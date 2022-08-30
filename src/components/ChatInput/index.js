import { useState } from 'react';
import { Input, Upload, message } from 'antd';
import { SmileOutlined, CameraOutlined, SendOutlined, AudioOutlined} from "@ant-design/icons";


import PropTypes from 'prop-types';

import './ChatInput.scss';

const ChatInput = (props) => {
  const [value, setValue] = useState('');

  const uploadSettings = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    multiple: true,
  
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
  
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className='chat-input'>
      <div className='chat-input__smile-btn'>
        <button>
          <SmileOutlined style={{ fontSize: '20px'}} />
        </button>
      </div>
      <Input onChange={(e)=>{setValue(e.target.value)}} size="large"  placeholder="Введите текст сообщения" />
      <div className='chat-input__actions'>
        <Upload {...uploadSettings}>
          <button>
            <CameraOutlined style={{ fontSize: '20px'}} />
          </button>
        </Upload>
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