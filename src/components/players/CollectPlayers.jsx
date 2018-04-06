import React, { Component } from "react";
import { Link } from "react-router-dom";

import AddPlayer from '../../containers/players/AddPlayer';
import PlayerList from '../../components/players/PlayerList';

// main player entry page
class CollectPlayers extends Component {

	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	// triggers action to set up the redux tournament state
	onClick() {
		this.props.genTournament();
	}

	render () {
		return (
		<div>
			<p>
				<Link to={"/tournament"}>Tournament</Link>
			</p>
			<p>Please add at least 4 players below to begin</p>
			<AddPlayer players={this.props.players}/>
			<PlayerList players={this.props.players}/>
			{this.props.players.length >= 4 ?
				<Link to={"/tournament"}>
					<button onClick={this.onClick}>Generate Tournament!</button>
				</Link> 
				: null}
		</div>
		);
	}

}

export default CollectPlayers;