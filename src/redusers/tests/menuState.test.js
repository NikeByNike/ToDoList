import menuState from '../menuState';

const initialState = [
  {
    id: 1,
    name: 'Дом',
  },
  {
    id: 2,
    name: 'Работа',
  },
  {
    id: 3,
    name: 'Разное',
  },
];

test('initialState', () => {
  const action = {type: 'TEST', load: 'test'};
  expect(menuState(initialState, action))
    .toEqual(initialState);
});

test('ADD_MENU_ITEM', () => {
  const menuItem = {
    id: 7,
    name: 'New',
  };
  expect(menuState(initialState, {type: 'ADD_MENU_ITEM', load: menuItem}))
    .toEqual([
      ...initialState,
      menuItem,
    ]);
});

test('DELETE_MENU_ITEM', () => {
  expect(menuState(initialState, {type: 'DELETE_MENU_ITEM', load: 2}))
    .toEqual([
      initialState[0],
      initialState[2],
    ]);
  expect(menuState(initialState, {type: 'DELETE_MENU_ITEM', load: 3}))
    .toEqual([
      initialState[0],
      initialState[1],
    ]);
});
