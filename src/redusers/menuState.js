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

export default function menuState(state = initialState, action) {
  if (action.type === 'ADD_MENU_ITEM') {
    return [
      ...state,
      action.load,
    ];
  }
  return state;
}
