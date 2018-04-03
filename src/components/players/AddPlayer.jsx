import React, { Component } from "react";
import Input from './Input';

class AddPlayer extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.state = {
			value: ""
		}
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({
			value: e.target.value,
		});
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.submitPlayer({name: this.state.value})
		this.setState({
			value: ""
		})
	}

	render() {
		return (
		<form onSubmit={this.onSubmit}>
			<Input onChange={this.onChange} value={this.state.value} />
			<button disabled={this.state.value.length < 3}>Add</button>
		</form>
		);
	}
}

export default AddPlayer;