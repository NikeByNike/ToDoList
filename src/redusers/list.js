const initialState = {
	items: [{
			id: 1,
			title: 'Уборка',
			text: 'помыть посуду',
			cat_id: 1},
		{
			id: 2,
			title: 'Код',
			text: 'закончить ToDoList',
			cat_id: 2},
		{
			id: 3,
			title: 'Покупки',
			text: 'купить новый телефон',
			cat_id: 3}
	],
	coise: 0
};

export default function newState(state = initialState, action) {
	if (action.type === 'ADD_LIST_ITEM') {
		return {
			...state,
			items:[...state.items,action.load]
		};
	} else if (action.type === 'DELETE_LIST_ITEM') {
		let newState =[];
		for (let i = 0; i < state.items.length; i++) {
			if (action.load !== state.items[i].id) {
				newState = [...newState, state.items[i]]
			}
		};
		return {
			...state,
			items:newState
		};
	} else if (action.type === 'EDIT_LIST_ITEM') {
		let newState =[];
		for (let i = 0; i < state.items.length; i++) {
			if (action.load.item.id === state.items[i].id) {
				state.items[i] = action.load.item;
			}
			newState = [...newState, state.items[i]]
		};
		return {
			...state,
			items:newState
		};
	} else if (action.type === 'FILTER') {
		return {
			...state,
			coise: action.load
		};
	}
	return state;
}