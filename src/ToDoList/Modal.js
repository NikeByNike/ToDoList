import React, {Component} from 'react';
import {connect} from 'react-redux';

class Modal extends Component {

  closeModal() {
    this.props.closeModal();
  }

  listItem(e) {
    e.preventDefault();
    if (this.inputTitle.value !== '') {
      const ListItem = {};
      ListItem[this.props.modal.item.id] = {
        title: this.inputTitle.value,
        text: this.inputText.value,
        cat_id: this.props.modal.item.cat_id,
      };
      this.props.editListItem(ListItem);
      this.props.closeModal();
    }
  }

  render() {
    const { isOpen, item } = this.props.modal;
    const id = Object.keys(item)[0];

    if (!isOpen) {
      return null;
    }

    return (
      <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form autoComplete="off" onSubmit={e => this.listItem(e)}>
              <div className="modal-header">
                <input ref={title => {
                  this.inputTitle = title;
                }} type="text"
                       placeholder="Title" defaultValue={item.title}/>
                <button type="button" onClick={() => this.closeModal()}
                        className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <textarea ref={text => {
                  this.inputText = text;
                }}
                          cols="50" rows="5" placeholder="Text"
                          defaultValue={item.text}/>
              </div>
              <div className="modal-footer">
                <input type="submit" className="btn btn-primary" value="Сохронить"/>
                <button type="button" onClick={() => this.closeModal()}
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
    modal: state.modalState,
  }),
  dispatch => ({
    editListItem: ListItem => {
      dispatch({type: 'EDIT_LIST_ITEM', load: ListItem});
    },
    closeModal: () => {
      dispatch({type: 'CLOSE_MODAL'});
    },
  })
)(Modal);
