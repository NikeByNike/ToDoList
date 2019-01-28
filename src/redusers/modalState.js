const initialState = {
  item: {
    id: 0,
    title: 'Test',
    text: 'test',
    cat_id: 0,
  },
  isOpen: false,
};

export default function modalState(state = initialState, action) {
  if (action.type === 'OPEN_MODAL') {
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
