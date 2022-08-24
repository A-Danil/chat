import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';

import {generateAvatarFromHash} from 'utils/helper';
import { Time, IconReaded, Avatar } from '../';

import './DialogItem.scss';

const getMessageTime = created_at => {
  if (isToday(created_at)){
    return format(created_at, 'HH:mm')
  } else {
    return format(created_at, 'dd.MM.yyyy')
  }
}

// const getAvatar = avatar => {
//   if (avatar){
//     return (
//       <img 
//         src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' 
//         alt={`User avatar`}
//       />
//     )
//   } else {
//     // make avatar
//   }
// }

const DialogItem = ({ user, unreaded, isMe, text, created_at }) => {

  return (
    <div className={classNames("dialogs__item", {'dialogs__item--online' : user.isOnline})}>
      <div className='dialogs__item-avatar'>
        <Avatar user={user} />
      </div>
      <div className='dialogs__item-info'>
        <div className='dialogs__item-info-top'>
          <b>{user.fullname}</b>
          <span>
            {getMessageTime(created_at)}
          </span>
        </div>
        <div className='dialogs__item-info-bottom'>
          <p>{text}</p>
          {isMe && <IconReaded isMe={true} isReaded={false} />}
          {unreaded > 0 && <div className='dialogs__item-info-bottom-count'>{unreaded > 9 ? '+9' : unreaded}</div>}
        </div>
      </div>
    </div>
  )
}


export default DialogItem;