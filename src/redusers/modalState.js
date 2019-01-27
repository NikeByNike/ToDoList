const initialState = {
  item: {
    id: 1,
    title: 'Уборка',
    text: 'помыть посуду',
    cat_id: 1,
  },
  isOpen: false,
};

export default function modalState(state = initialState, action) {
  if (action.type === 'EDIT_LIST_ITEM') {
    return {
      ...state,
      isOpen: action.load.isOpen,
    };
  } else if (action.type === 'PRE_EDIT_LIST_ITEM') {
    return {
      item: action.load,
      isOpen: true,
    };
  } else if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isOpen: false,
    };
  } else {
    return state;
  }
}
