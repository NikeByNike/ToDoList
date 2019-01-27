import React, { Component } from "react";
import { connect } from "react-redux";
import FlipMove from "react-flip-move";


class Menu extends Component {
	
	filter(id) {
			this.props.filterId(id);
	}

	render() {
		return (
			<div className="toDoList_menu">
				<ul>
					<FlipMove duration={300} esing="ease-out">
						<li className="toDoList_menu_all">
							<a onClick={this.filter.bind(this, 0)}>
								<div>
									<h2>
										Все
									</h2>
								</div>
							</a>
						</li>
						{this.props.menu.map(item => (
							<li key={item.id}>
							<a onClick={this.filter.bind(this, item.id)}>
									<div>
										<h2>
											{item.name}
										</h2>
									</div>
								</a>
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
		menu: state.menu
	}),
	dispatch => ({
		filterId: (id) => {
			dispatch({type: 'FILTER', load: id})
		}
	})
)(Menu)