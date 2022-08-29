import {useState} from 'react';
import { Dialogs as BaseDialogs } from 'components';

const Dialogs = ({ items, userID }) =>{
  const [inputValue, setInputValue] = useState('');
  const [filtered, setFiltered] = useState(Array.from(items));

  const onChangeInput = value => {
    setFiltered(items.filter(dialog => dialog.user.fullname.toLowerCase().indexOf(value) >= 0))
    setInputValue(value);
  };

  return (
    <BaseDialogs 
      userID={userID}
      items={filtered} 
      onSearch={onChangeInput} 
      inputValue={inputValue}
    />
  )
}

export default Dialogs;