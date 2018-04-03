import React, { Component } from 'react';
import Input from './Input';

class PlayerItem extends Component {
	constructor(props){
		super(props);
		this.state = {
			editing: false,
			value: ""
		}
		this.onChange=this.onChange.bind(this);
		this.onEdit=this.onEdit.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
		this.onDelete=this.onDelete.bind(this);
	}

	onChange(e) {
		this.setState({
			value: e.target.value
		})
	}

	onEdit() {
		this.setState({
			editing: true,
			value: this.props.player.name
		})
	}

	onDelete() {
		this.props.deletePlayer({
			id: this.props.player.id
		})
	}

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