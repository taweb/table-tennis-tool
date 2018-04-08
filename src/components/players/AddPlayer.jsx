// imports
import React, { Component } from "react";
import Input from './Input';
import DisplayError from './DisplayError';

class AddPlayer extends Component {
	constructor(props) {
		super(props);
		// react state to track input value
		this.state = {
			value: "",
			error: false  
		}
		// bind methods
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);

	}

	// setting local state as user types player name
	onChange(e) {
		this.setState({
			value: e.target.value,
			error: false
		});
	}

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
			this.props.submitPlayer({name: this.state.value})

			this.setState({
				value: invalid ? currentValue : "",
				error: invalid
			})
	}

	render() {

		// remove white space from beginning and end of string when checking length of input is valid (3 or more)
		const string = this.state.value;
		const stringNoSpace = string.trim();
		const stringLength = stringNoSpace.length;

		return (
		<div>
			<form onSubmit={this.onSubmit}>
				<Input onChange={this.onChange} value={this.state.value} /> <br />
				<button className="button-add" disabled={stringLength < 3 || this.props.players.length >= 32}>Add</button> {/* the add player button only appears if the input name given is more than 3 characters long*/}
			</form>
			{this.state.error === true ?
				<DisplayError className="error-add" error="Name already added, please enter a unique name" /> : null
			}
		</div>

		);
	}
}

export default AddPlayer;