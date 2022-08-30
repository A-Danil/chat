import { orderBy } from 'lodash';
import { Input, Empty } from 'antd';
import { SearchOutlined } from "@ant-design/icons";

import { DialogItem } from '../';

import './Dialogs.scss';

const Dialogs = ({ items, userID, onSearch, inputValue, currentDialogId, onSelectDialog }) => {

  return (
      <div className='dialogs'>
         <div className="chat__sidebar-search">
            <Input 
              placeholder="Поиск по сообщениям" 
              prefix={<SearchOutlined />} 
              onChange={e => onSearch(e.target.value)}
              value={inputValue}
              />
          </div>
        {items.length ? 
          orderBy(items, ["created_at"], ["desc"]).map(item => (
            <DialogItem 
              key={item._id}
              currentDialogId={currentDialogId}
              onSelect={onSelectDialog}
              isMe={item.user._id === userID}
              {...item}
            />
          )) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Ночего не найдено' />
        }
      </div>
  )
}


export default Dialogs;