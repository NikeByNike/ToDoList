import React, {Component} from 'react';
import {connect} from 'react-redux';

class FormMenu extends Component {

  menuItem(e) {
    e.preventDefault();
    if (this.inputTitle.value.trim() !== '') {
      const MenuItem = {
        id: Date.now(),
        name: this.inputTitle.value.trim(),
      };
      this.inputTitle.value = '';
      this.props.addListItem(MenuItem);
    }
  }

  render() {
    return (
      <div className="toDoList_form toDoList_formMenu">
        <form autoComplete="off" onSubmit={e => this.menuItem(e)}>
          <div>
            <input ref={title => { this.inputTitle = title; }} type="text"
                   placeholder="Новая категория" />
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
    menu: state.menuState,
  }),
  dispatch => ({
    addListItem: MenuItem => {
      dispatch({type: 'ADD_MENU_ITEM', load: MenuItem});
    },
  })
)(FormMenu);
