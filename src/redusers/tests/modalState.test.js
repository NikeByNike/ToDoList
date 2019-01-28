import modalState from '../modalState';

const initialState = {
  item: {
    id: 0,
    title: 'Test',
    text: 'test',
    cat_id: 0,
  },
  isOpen: false,
};

test('initialState', () => {
  expect(modalState(initialState, {type: 'TEST', load: 'test'}))
    .toEqual(initialState);
});

test('OPEN_MODAL', () => {
  const NewItem = {
      id: 5,
      title: 'New test',
      text: 'New test',
      cat_id: 5,
  };
  expect(modalState(initialState, {type: 'OPEN_MODAL', load: NewItem}))
    .toEqual({
      item: NewItem,
      isOpen: true,
    });
});

test('CLOSE_MODAL', () => {
  expect(modalState(initialState, {type: 'CLOSE_MODAL'}))
    .toEqual({
      ...initialState,
      isOpen: false,
    });
});
