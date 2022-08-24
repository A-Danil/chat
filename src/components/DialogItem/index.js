import classNames from 'classnames';

import { Time, IconReaded } from '../';

import './DialogItem.scss';

const getAvatar = avatar => {
  if (avatar){
    return <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' 
      alt={`User avatar`}/>
  } else {
    // make avatar
  }
}

const DialogItem = ({ user, message, unreaded }) => {
  const today = new Date();

  return (
    <div className={classNames("dialogs__item", {'dialogs__item--online' : user.isOnline})}>
      <div className='dialogs__item-avatar'>
        {/* <img src={user.avatar} alt={`${user.fullname} avatar`}/> */}
        {getAvatar('https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')}
      </div>
      <div className='dialogs__item-info'>
        <div className='dialogs__item-info-top'>
          <b>Фёдор Достоевский</b>
          <span>
            {/* <Time date={today.toISOString()} /> */}
            13:03
          </span>
        </div>
        <div className='dialogs__item-info-bottom'>
          <p>Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша</p>
          <IconReaded isMe={true} isReaded={false} />
          {unreaded > 0 && <div className='dialogs__item-info-bottom-count'>{unreaded > 9 ? '+9' : unreaded}</div>}
        </div>
      </div>
    </div>
  )
}


export default DialogItem;