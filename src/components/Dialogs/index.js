import classNames from 'classnames';
import { orderBy } from 'lodash';

import { DialogItem } from '../';

import './Dialogs.scss';

const Dialogs = ({ items, userID }) => {

  return (
      <div className='dialogs'>
        {orderBy(items, ["created_at"], ["desc"]).map(item => (
          <DialogItem 
            key={item._id}
            // user={item.user}
            // unreaded={0}
            // message={item}
            isMe={item.user._id === userID}
            {...item}
          />
        ))}
      </div>
  )
}


export default Dialogs;