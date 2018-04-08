import React, { Component } from "react";
import Input from "./Input";
import DisplayError from "./DisplayError";

class PlayerItem extends Component {
	constructor(props){
		super(props); 
		this.state = {
			// keep track of edit state of player item - used to determine whether to display either form or list item in render
			editing: false,
			// keeps track of player input name while being edited
			value: "",
			error: false
		}
		this.onChange=this.onChange.bind(this);
		this.onEdit=this.onEdit.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
		this.onDelete=this.onDelete.bind(this);
		this.onUndo=this.onUndo.bind(this);
	}

	// update the local state name input value as the user types
	onChange(e) {
		this.setState({
			value: e.target.value,
			error: false
		})
	}

	// when edit button clicked, update to edit state and get the player name
	onEdit() {
		this.setState({
			editing: true,
			value: this.props.player.name
		})
	}

	// method calls action creator which dispatches action to delete the player from player list in redux state
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

	// when edit form submitted
	onSubmit(e) {
		// preventing default page reload when form submitted
		e.preventDefault();
		let currentValue = this.state.value.trim();
		let invalid = this.props.players.reduce((acc, item) => {
			return item.name === currentValue ? acc = true : acc
		}, false)

		// next line results in a warning in console from eslint - attempted to resolve this warning - no impact on code when testing 
		// "Expected an assignment or function call and instead saw an expression  no-unused-expressions" warning
		// eslint-disable-next-line
		invalid ?
			null
			:
			// if valid input, call action creator which dispatches action to edit the player name in redux state
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
		// remove white space from beginning and end of string when checking length of input is valid (3 or more)
		const string = this.state.value;
		const stringNoSpace = string.trim();
		const stringLength = stringNoSpace.length;

		return (
			<div className="player-item">
				{this.state.editing ?
				// if player item in edit state, display form
				<div>
					<form onSubmit={this.onSubmit}>
						<Input className="input-edit" onChange={this.onChange} value={this.state.value} /> <br />
						<button className="button-save" disabled={stringLength < 3}>Save</button>
					</form> 
					{this.state.error === true ?
						<DisplayError className="error-edit" error="Please provide an alternative unique name, or press cancel to undo name edit" /> : null
					}
					<button className="button-cancel" onClick={this.onUndo}>Cancel</button>
				</div>
				:
				<div>
					<li className="player-name">{this.props.player.name}</li>
					<button className="button-edit" onClick={this.onEdit}>Edit</button>
					<button className="button-delete" onClick={this.onDelete}>Delete</button>
				</div>
			}
			</div>
		)
	}
}

export default PlayerItem;