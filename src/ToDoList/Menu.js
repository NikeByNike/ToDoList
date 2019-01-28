import React, {Component} from 'react';
import {connect} from 'react-redux';
import FlipMove from 'react-flip-move';


class Menu extends Component {

  filter = catId => {
    this.props.filterId(catId);
  };

  delMenuItem = catId => {
    this.props.deleteListItems(catId);
    this.props.delMenuItem(catId);
  };

  render() {
    return (
      <div className="toDoList_menu">
        <ul>
          <FlipMove duration={300} esing="ease-out">
            <li className="toDoList_menu_all">
              <div>
                <a onClick={() => this.filter(0)}>
                <h2>
                  Все
                </h2>
                </a>
              </div>
            </li>
            {this.props.menu.map(item => (
              <li key={item.id}>
                <div>
                  <button className="deleteBtn"
                          onClick={() => this.delMenuItem(item.id)}/>
                  <a onClick={() => this.filter(item.id)}>
                    <h2>
                      {item.name}
                    </h2>
                  </a>
                </div>
              </li>
            ))}
          </FlipMove>
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    menu: state.menuState,
  }),
  dispatch => ({
    filterId: catId => {
      dispatch({type: 'FILTER', load: catId});
    },
    delMenuItem: catId => {
      dispatch({type: 'DELETE_MENU_ITEM', load: catId});
    },
    deleteListItems: catId => {
      dispatch({type: 'DELETE_LIST_ITEM_BY_CAT', load: catId});
    },
  })
)(Menu);
