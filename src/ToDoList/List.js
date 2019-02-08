import React, {Component} from 'react';
import {connect} from 'react-redux';
import FlipMove from 'react-flip-move';

class List extends Component {
  deleteItem(id) {
    this.props.deleteId(id);
  }

  editItem(item, id) {
    item['id'] = id;
    this.props.editId(item);
  }

  render() {
    const { items, menu } = this.props;
    const keys = Object.keys(this.props.items);
    const category = {};

    for (let i = 0; i < menu.length; i++) {
      category[menu[i].id] = menu[i].name;
    }

    return (
      <div className="toDoList_list">
        <ul>
          <FlipMove duration={300} esing="ease-out">
            {keys.map(id =>
              (this.props.choice === items[id].cat_id
                || this.props.choice === 0) && (
                <li key={id}>
                  <div className={items[id].date < new Date() ? "red" : null}>
                    <button className="deleteBtn"
                            onClick={() => this.deleteItem(id)}/>
                    <button className="editBtn"
                            onClick={() => this.editItem(items[id], id)}/>
                    <span>
                      {category[items[id].cat_id]}
                    </span>
                    {items[id].date < new Date() ?
                      <span className="death_time">
                        Просрочен
                      </span>
                    : null}
                    <h4>
                      {items[id].title}
                    </h4>
                    <p>
                      {items[id].text}
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
      dispatch({type: 'OPEN_MODAL', load: item});
    },
  })
)(List);
