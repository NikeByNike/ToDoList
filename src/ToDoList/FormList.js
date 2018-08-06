import React, { Component } from "react";
import { connect } from 'react-redux';

class FormList extends Component {
	
	listItem(e) {
		e.preventDefault();
		if (this.inputTitle.value.trim() !== '') {
			const ListItem = {
				id: Date.now(),
				title: this.inputTitle.value.trim(),
				text: this.inputText.value.trim(),
				cat_id: parseInt(this.selectOption.value, 10)
			};
			this.props.addListItem(ListItem);
			this.inputTitle.value = '';
			this.inputText.value = '';
		}
	}

	render() {
	  return (
			<div className="toDoList_form">
				<form autoComplete="off" onSubmit={this.listItem.bind(this)}>
					<div>
						<input ref={(title) => { this.inputTitle = title }} type="text" 
									 placeholder="Title" />
					</div>
					<div>
						<textarea ref={(text) => { this.inputText = text }} 
											cols="40" rows="2" placeholder="Text" />
					</div>
					<div>
						<label htmlFor="select-choice">Выберите категорию:</label><br/>
						<select ref={(category) => { this.selectOption = category }} 
										id="select-choice">
							{this.props.menu.map(item => (
								<option key={item.id} value={item.id}>{item.name}</option>
							))}
						</select>
					</div>
					<div>
						<input type="submit" value="Добавить" />
					</div>
				</form>
			</div>
	  );
	}
}

export default connect(
	state => ({
		menu: state.menu
	}),
	dispatch => ({
		addListItem: (ListItem) => {
			dispatch({type: 'ADD_LIST_ITEM', load: ListItem})
		}
	})
)(FormList)