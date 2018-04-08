import React, { Component } from "react";
import Input from "./Input";
import DisplayError from "./DisplayError";

// AddPlayer component is displayed on CollectPlayers page and allows user to input player names into form
class AddPlayer extends Component {
	
	constructor(props) {
		super(props);
		// react local state to keep track of input name and error state of the player input form
		this.state = {
			value: "",
			error: false  
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	// update the local state name input value as the user types
	onChange(e) {
		this.setState({
			value: e.target.value,
			error: false
		}); 
	}

	// method called when new name submitted by user into form
	onSubmit(e) {
		// preventing default page reload when form submitted
		e.preventDefault();
		// remove any whitespace from beginning and end of player name input
		let currentValue = this.state.value.trim();
		// iterating over each player name already inputted by the user - return true if any name matches
		const invalid = this.props.players.reduce((acc, item) => {
			return item.name === currentValue ? acc = true : acc
		}, false)
		// next line results in a warning in console from eslint - attempted to resolve this warning - no impact on code when testing 
		// "Expected an assignment or function call and instead saw an expression  no-unused-expressions" warning
		// eslint-disable-next-line
		invalid ?
			null
			:
			// call action creator to add the new name to player list if name input is valid
			this.props.submitPlayer({name: this.state.value})
			this.setState({
				value: invalid ? currentValue : "",
				error: invalid
			})
	}

	render() {
		// remove white space from beginning and end of string when checking length of name input is valid (3 or more characters)
		const string = this.state.value;
		const stringNoSpace = string.trim();
		const stringLength = stringNoSpace.length;

		return (
		<div>
			<form onSubmit={this.onSubmit}>
				<Input onChange={this.onChange} value={this.state.value} /> <br />
			{/* the add player button only enabled if the player input name given (after white space trimming) is 3 or more characters long*/}
				<button className="button-add" disabled={stringLength < 3 || this.props.players.length >= 32}>Add</button> 
			</form>
			{/* If input form in error state, render DisplayError component with the message provided as prop */}
			{this.state.error === true ?
				<DisplayError className="error-add" error="Name already added, please enter a unique name" /> : null
			}
		</div>
		);
	}
}

export default AddPlayer;