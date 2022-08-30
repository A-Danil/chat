import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { dialogsActions } from "redux/actions";

import { Dialogs as BaseDialogs } from 'components';


const Dialogs = ({ fetchDialogs, currentDialogId, setCurrentDialogId, items, userID }) =>{
  const [inputValue, setInputValue] = useState('');
  const [filtered, setFiltered] = useState(Array.from(items));

  const onChangeInput = value => {
    setFiltered(items.filter(dialog => dialog.user.fullname.toLowerCase().indexOf(value) >= 0))
    setInputValue(value);
  };

  useEffect(()=>{
    if(!items.length){
      fetchDialogs()
    } else {
      setFiltered(items)
    }
  }, [items]);

  return (
    <BaseDialogs 
      userID={userID}
      items={filtered} 
      onSearch={onChangeInput} 
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogId}
      currentDialogId={currentDialogId}
    />
  )
}

export default connect(({dialogs}) => dialogs, dialogsActions)(Dialogs);