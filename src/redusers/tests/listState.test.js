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
    4: {
      title: 'Покупки',
      text: 'купить новый телефон',
      cat_id: 3,
    },
  },
  choice: 0,
};

test('initialState', () => {
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
  expect(listState(initialState, {type: 'ADD_LIST_ITEM', load: listItem}))
    .toEqual({
      ...initialState,
      items: {...initialState.items, ...listItem},
    });
});

test('EDIT_LIST_ITEM', () => {
  const listItem = {
    2: {
      title: 'New title',
      text: 'закончить ToDoList',
      cat_id: 2,
    },
  };
  expect(listState(initialState, {type: 'EDIT_LIST_ITEM', load: listItem}))
    .toEqual({
      ...initialState,
      items: {...initialState.items,...listItem},
    });
});

test('DELETE_LIST_ITEM', () => {
  expect(listState(initialState, {type: 'DELETE_LIST_ITEM', load: 4}))
    .toEqual({
      ...initialState,
      items: {
        1:{...initialState.items[1]},
        2:{...initialState.items[2]},
        3:{...initialState.items[3]},
      },
    });
  expect(listState(initialState, {type: 'DELETE_LIST_ITEM', load: 1}))
    .toEqual({
      ...initialState,
      items: {
        2:{...initialState.items[2]},
        3:{...initialState.items[3]},
        4:{...initialState.items[4]},
      },
    });
});

test('DELETE_LIST_ITEM_BY_CAT', () => {
  expect(listState(initialState, {type: 'DELETE_LIST_ITEM_BY_CAT', load: 2}))
    .toEqual({
      ...initialState,
      items: {
        1:{...initialState.items[1]},
        3:{...initialState.items[3]},
        4:{...initialState.items[4]},
        },
    });
  expect(listState(initialState, {type: 'DELETE_LIST_ITEM_BY_CAT', load: 3}))
    .toEqual({
      ...initialState,
      items: {
        1:{...initialState.items[1]},
        2:{...initialState.items[2]},
      },
    });
});

test('FILTER', () => {
  expect(listState(initialState, {type: 'FILTER', load: 9}))
    .toEqual({
      ...initialState,
      choice: 9,
    });
});
