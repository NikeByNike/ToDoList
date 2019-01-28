import listState from '../listState';

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

test('initialState', () => {
  const listItem = {
    id: {
      title: 'Уборка',
      text: 'помыть посуду',
      cat_id: 1,
    },
  };
  const action = {type: 'TEST', load: 'test'};
  expect(listState(initialState, action))
    .toEqual(initialState);
});

test('ADD_LIST_ITEM', () => {
  const listItem = {
    id: {
      title: 'Уборка',
      text: 'помыть посуду',
      cat_id: 1,
    },
  };
  const action = {type: 'ADD_LIST_ITEM', load: listItem};
  expect(listState(initialState, action))
    .toEqual({
      ...initialState,
      items: {...initialState.items, ...listItem},
    });
});

test('EDIT_LIST_ITEM', () => {
  // копируем первый элемент initialState.items
  const listItem = {};
  const id = Object.keys(initialState.items)[0];
  listItem[id] = {...initialState.items[id]};

  listItem[id].title = 'New title';
  const action = {type: 'EDIT_LIST_ITEM', load: listItem};
  expect(listState(initialState, action))
    .toEqual({
      ...initialState,
      items: {...initialState.items,...listItem},
    });
});

test('DELETE_LIST_ITEM', () => {
  // находим id первого элемента initialState.items
  const id = Object.keys(initialState.items)[0];

  const newState = {...initialState.items};
  delete newState[id];
  const action = {type: 'DELETE_LIST_ITEM', load: id};
  expect(listState(initialState, action))
    .toEqual({
      ...initialState,
      items: {...newState},
    });
});

test('FILTER', () => {
  const action = {type: 'FILTER', load: 9};
  expect(listState(initialState, action))
    .toEqual({
      ...initialState,
      choice: 9,
    });
});
