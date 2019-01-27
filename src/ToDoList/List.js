import React, {Component} from 'react';
import {connect} from 'react-redux';
import FlipMove from 'react-flip-move';

class List extends Component {
  deleteItem(id) {
    this.props.deleteId(id);
  }

  editItem(item) {
    this.props.editId(item);
  }

  render() {
    const menu = this.props.menu;
    const category = {};

    for (let i = 0; i < menu.length; i++) {
      category[menu[i].id] = menu[i].name;
    }

    return (
      <div className="toDoList_list">
        <ul>
          <FlipMove duration={300} esing="ease-out">
            {this.props.items.map(item =>
              (this.props.choice === item.cat_id
                || this.props.choice === 0) && (
                <li key={item.id}>
                  <div>
                    <button className="deleteBtn"
                            onClick={() => this.deleteItem(item.id)}/>
                    <button className="editBtn"
                            onClick={() => this.editItem(item)}/>
                    <span>
                      {category[item.cat_id]}
                    </span>
                    <h4>
                      {item.title}
                    </h4>
                    <p>
                      {item.text}
                    </p>
                  </div>
                </li>
              )
            )}
          </FlipMove>
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    items: state.listState.items,
    menu: state.menuState,
    choice: state.listState.choice,
  }),
  dispatch => ({
    deleteId: id => {
      dispatch({type: 'DELETE_LIST_ITEM', load: id});
    },
    editId: item => {
      dispatch({type: 'PRE_EDIT_LIST_ITEM', load: item});
    },
  })
)(List);
