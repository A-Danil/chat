const initialStates = {
  items: [],
  currentDialogId: null,
  isLoading: false
}

export default (state = initialStates, {type, payload}) => {
  switch(type){
    case 'DIALOGS:SET_ITEMS':
    return {
      ...state,
      items: payload
    }
    case 'DIALOGS:SET_CURRENT_DIALOG_ID':
    return {
      ...state,
      currentDialogId: payload
    }
    default:
      return state
  }
}