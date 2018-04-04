// imports
import React, { Component } from "react";
import Input from './Input';

class AddPlayer extends Component {
	constructor(props) {
		super(props);
		// react state to track input value
		this.state = {
			value: ""
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
		this.props.submitPlayer({name: this.state.value})
		// setting the input value back to empty string when user adds a name
		this.setState({
			value: ""
		})
	}

	render() {
		return (
		<form onSubmit={this.onSubmit}>
			<Input onChange={this.onChange} value={this.state.value} />
			<button disabled={this.state.value.length < 3}>Add</button> {/* the add player button only appears if the input name given is more than 3 characters long*/}
		</form>
		);
	}
}

export default AddPlayer;