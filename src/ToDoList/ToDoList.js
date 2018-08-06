import React, { Component } from "react";
import { connect } from 'react-redux';

import Modal from "./Modal";
import Menu from "./Menu";
import List from "./List";
import FormList from "./FormList";
import FormMenu from "./FormMenu";

class ToDoList extends Component {

	render() {
		return (
			<div className="container toDoList">
				<div className="row">
					<div className="col-4">
						<FormMenu />
					</div>
					<div className="col-8">
						<FormList />
					</div>
				</div>
				<div className="row">
					<div className="col-4">
						<Menu />
					</div>
					<div className="col-8">
						<List />
						<Modal />
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		testStore: state
	}),
	dispatch => ({})
	)(ToDoList);