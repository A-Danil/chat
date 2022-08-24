// import { formatDistanceToNow, parseISO } from 'date-fns';
// import ruLocale from 'date-fns/locale/ru';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// import readed from 'assets/img/readed.svg';
// import noreaded from 'assets/img/noreaded.svg';
import { Time, IconReaded } from '../';


import './Message.scss';

const Message = ({ avatar, user, text, date, isMe, isReaded, attachments, isTyping }) => (
  <div className={classNames('message', {
    'message--isme': isMe, 
    'message--is-typing': isTyping,
    'message--image': attachments && attachments.length === 1
    })}>
    <div className='message__content'>
      {/* {isMe && (isReaded ?
        <img className='message__icon-readed' src={readed} alt='readed icon'/> :
        <img className='message__icon-readed' src={noreaded} alt='noreaded icon'/>)
      } */}
      <IconReaded isMe={isMe} isReaded={isReaded} />
      <div className='message__avatar'>
        <img src={avatar} alt={`Avatar ${user.fullname}`}/>
      </div>
      <div className='message__info'>
          {(text || isTyping) && (
              <div className='message__bubble'>
                {text && <p className='message__text'>{text}</p>}
                {isTyping && <div className='message__typing'>
                  <span className="circle scaling"></span>
                  <span className="circle scaling"></span>
                  <span className="circle scaling"></span>
                </div>}
              </div>
          )}
          <div className='message__attachments'>
            {attachments && attachments.map(item =>(
              <div className='message__attachments-item'>
                <img src={item.url} alt={item.filename}/>
              </div>
            ))}
          </div>
          {date && (
            <span className='message__date'>
              <Time date={date}/>
            </span>
          )}
      </div>
    </div>
  </div>
)

Message.defaultProps = {
  user: {}
}

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool
}



export default Message;