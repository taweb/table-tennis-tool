import React, { Component } from 'react';
import Input from './Input';
import DisplayError from './DisplayError';

class PlayerItem extends Component {
	constructor(props){
		super(props); 
		this.state = {
			// editing state keeps track of if player item can be edited, used to display either form or li in render
			editing: false,
			// keeps track of player item input value when being edited
			value: "",
			error: false
		}
		// bind methods
		this.onChange=this.onChange.bind(this);
		this.onEdit=this.onEdit.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
		this.onDelete=this.onDelete.bind(this);
		this.onUndo=this.onUndo.bind(this);
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

	onUndo() {
		this.setState({
			editing: false,
			error: false
		})
	}

	// when form submitted
	onSubmit(e) {
		// preventing page reload when form submitted
		e.preventDefault();
		let currentValue = this.state.value.trim();

		const invalid = this.props.players.reduce((acc, item) => {
			return item.name === currentValue ? acc = true : acc
		}, false)

		invalid ?
			null
			:
			this.props.editPlayer({
	 			id: this.props.player.id,
	 			name: currentValue
	 		})

		this.setState({
			editing: invalid,
			error: invalid
		}) 
	}
 
	render() {
		return (
			<div>
				{this.state.editing ?
				<div>
					<form onSubmit={this.onSubmit}>
						<Input onChange={this.onChange} value={this.state.value} /> <br />
						<button className="button-save" disabled={this.state.value.length < 3}>Save</button>
					</form> 
					{this.state.error === true ?
						<DisplayError error="Please provide an alternative unique name, or press cancel to undo name edit" /> : null
					}
					<button className="button-cancel" onClick={this.onUndo}>Cancel</button>
				</div>
				:
				<div>
					<li>{this.props.player.name}</li>
					<button className="button-edit" onClick={this.onEdit}>Edit</button>
					<button className="button-delete" onClick={this.onDelete}>Delete</button>
				</div>
			}
			</div>
		)
	}
}

export default PlayerItem;