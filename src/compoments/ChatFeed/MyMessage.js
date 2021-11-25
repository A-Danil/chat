function MyMessage ( {message} ){
  if(message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="messege-attachments"
        className="message-image"
        style={{ float: 'right'}}
      />
    )
  }
  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: 'rgb(66, 128, 223)'}}>
      {message.text}
    </div>
  )
}

export default MyMessage;