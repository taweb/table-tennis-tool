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
				error: invalid ? true : false
			})
	}

	render() {


		return (
		<div>
			<form onSubmit={this.onSubmit}>
				<Input onChange={this.onChange} value={this.state.value} />
				<button disabled={this.state.value.length < 3}>Add</button> {/* the add player button only appears if the input name given is more than 3 characters long*/}
			</form>
			{this.state.error === true ?
				<DisplayError error="The name must be unique, please try again" /> : null
			}
		</div>

		);
	}
}

export default AddPlayer;