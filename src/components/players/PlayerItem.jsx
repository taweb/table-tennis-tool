import React, { Component } from 'react';
import Input from './Input';

class PlayerItem extends Component {
	constructor(props){
		super(props);
		this.state = {
			// editing state keeps track of if player item can be edited, used to display either form or li in render
			editing: false,
			// keeps track of player item input value when being edited
			value: ""
		}
		// bind methods
		this.onChange=this.onChange.bind(this);
		this.onEdit=this.onEdit.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
		this.onDelete=this.onDelete.bind(this);
	}

	// setting local state as user types player name
	onChange(e) {
		this.setState({
			value: e.target.value
		})
	}

	// when edit button clicked, update to edit mode, populate input field with the current player name
	onEdit() {
		this.setState({
			editing: true,
			value: this.props.player.name
		})
	}

	// calls container method which dispatches a deletePlayer action to reducer
	onDelete() {
		this.props.deletePlayer({
			id: this.props.player.id
		})
	}

	// when form submitted, editing state set back to false again and calls container method to dispatch an edit player action to the reducer
	onSubmit(e) {
		e.preventDefault();
		this.setState({
			editing: false
		})
 		this.props.editPlayer({
 			id: this.props.player.id,
 			name: this.state.value
 		})
	}


	render() {
		return (
			<div>
				{this.state.editing ?
				<form onSubmit={this.onSubmit}>
					<Input onChange={this.onChange} value={this.state.value} />
					<button disabled={this.state.value.length < 3}>Save</button>
				</form> 
				:
				<div>
				<li>{this.props.player.name}</li>
				<button onClick={this.onEdit}>Edit</button>
				<button onClick={this.onDelete}>Delete</button>
				</div>
			}
			</div>
		)
	}
}

export default PlayerItem;