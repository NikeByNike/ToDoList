import React, { Component } from "react";
import { connect } from 'react-redux';

class Modal extends Component {

	closeModal() {
		this.props.closeModal();
	}

	listItem(e) {
		e.preventDefault();
		if (this.inputTitle.value !== '') {
			const ListItem = {
				item: {
					id: this.props.modal.item.id,
					title: this.inputTitle.value,
					text: this.inputText.value,
					cat_id: this.props.modal.item.cat_id
				},
				isOpen: false
			};
			this.props.editListItem(ListItem);
		}
	}

	render() {
		const isOpen = this.props.modal.isOpen;

		if (!isOpen) return null;

	  return (
			<div className="modal" tabIndex="-1" role="dialog">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			    	<form autoComplete="off" onSubmit={this.listItem.bind(this)}>
				      <div className="modal-header">
				        <input ref={(title) => { this.inputTitle = title }} type="text" 
										 	 placeholder="Title" defaultValue={this.props.modal.item.title}/>
				        <button type="button" onClick={this.closeModal.bind(this)} 
				        				className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div className="modal-body">
				        <textarea ref={(text) => { this.inputText = text }} 
												cols="50" rows="5" placeholder="Text" 
												defaultValue={this.props.modal.item.text} />
				      </div>
			      	<div className="modal-footer">
					      <input type="submit" className="btn btn-primary" value="Сохронить" />
					      <button type="button" onClick={this.closeModal.bind(this)} 
					      				className="btn btn-secondary" data-dismiss="modal">
					      	Отмена
					      </button>
			      	</div>
			      </form>
			    </div>
			  </div>
			</div>
	  );
	}
}

export default connect(
	state => ({
		modal: state.modal
	}),
	dispatch => ({
		editListItem: (ListItem) => {
			dispatch({type: 'EDIT_LIST_ITEM', load: ListItem})
		},
		closeModal: () => {
			dispatch({type: 'CLOSE_MODAL'})
		}
	})
)(Modal)