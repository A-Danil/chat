import { useState } from 'react';
import { SendOutlined, PictureOutlined} from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

function MessageForm (props){
  const [value, setValue] = useState('');
  const { chatID, creds, userName } = props;

  function handleSubmit(e){
    e.preventDefault();

    const text = value.trim();

    if(text.length > 0) {
      sendMessage( creds, chatID, { text });
    }

    setValue('');
  }

  function handleChange(e){
  
    setValue(e.target.value);
    console.log(userName)
    isTyping(props, chatID);
  }

  function handleUpload(e){
    sendMessage( creds, chatID , { files: e.target.files, text: '' })
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message ..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <div className="form-btns">
        <label htmlFor="upload-button">
          <span className="image-button">
            <PictureOutlined className="picture-icon"/>
          </span>
        </label>
        <input
          type="file"
          multiple={false}
          id="upload-button"
          style={{display: 'none'}}
          onChange={handleUpload}
        />
        <button type="submit" className="send-button">
          <SendOutlined className="send-icon" />
        </button>
      </div>
    </form>
  )
}

export default MessageForm;