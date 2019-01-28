const initialState = {
  items: {
    1: {
      title: 'Уборка',
      text: 'помыть посуду',
      cat_id: 1,
    },
    2: {
      title: 'Код',
      text: 'закончить ToDoList',
      cat_id: 2,
    },
    3: {
      title: 'Покупки',
      text: 'купить новый телефон',
      cat_id: 3,
    },
  },
  choice: 0,
};

export default function listState(state = initialState, action) {
  if (action.type === 'ADD_LIST_ITEM' || action.type === 'EDIT_LIST_ITEM') {
    return {
      ...state,
      items: {...state.items, ...action.load},
    };
  } else if (action.type === 'DELETE_LIST_ITEM') {
    let newState = {};
    const keys = Object.keys(state.items);
    keys.map(id => {
      if (action.load !== id) {
        newState[id] = {...state.items[id]};
      }
    });
    return {
      ...state,
      items: { ...newState},
    };
  } else if (action.type === 'FILTER') {
    return {
      ...state,
      choice: action.load,
    };
  } else {
    return state;
  }
}
