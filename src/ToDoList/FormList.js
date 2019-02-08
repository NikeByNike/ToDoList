import React, {Component} from 'react';
import {connect} from 'react-redux';
import DateTimePicker from 'react-datetime-picker'

class FormList extends Component {
  state = {
    date: new Date(),
  };

  listItem(e) {
    e.preventDefault();
    if (this.inputTitle.value.trim() !== '') {
      const id = Date.now();
      const ListItem = {};
      ListItem[id] = {
        title: this.inputTitle.value.trim(),
        text: this.inputText.value.trim(),
        cat_id: parseInt(this.selectOption.value, 10),
        date: this.state.date,
      };
      this.props.addListItem(ListItem);
      this.inputTitle.value = '';
      this.inputText.value = '';
    }
  }

  onChange = date => this.setState({date});

  render() {
    return (
      <div className="toDoList_form">
        <form autoComplete="off" onSubmit={e => this.listItem(e)}>
          <div>
            <input ref={title => {
              this.inputTitle = title;
            }} type="text"
                   placeholder="Title"/>
          </div>
          <div>
            <textarea ref={text => {
              this.inputText = text;
            }}
                      cols="40" rows="2" placeholder="Text"/>
          </div>
          <div className="formList_selectors">
            <div>
              <label htmlFor="select-choice">Выберите категорию:</label><br/>
              <select ref={category => {
                this.selectOption = category;
              }}
                      id="select-choice">
                {this.props.menu.map(item => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
            <div>
              Выполнить до:<br/>
              <DateTimePicker
                onChange={this.onChange}
                value={this.state.date}
                showLeadingZeros={true}
              />
            </div>
          </div>
          <div>
            <input type="submit" value="Добавить"/>
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
    addListItem: ListItem => {
      dispatch({type: 'ADD_LIST_ITEM', load: ListItem});
    },
  })
)(FormList);
