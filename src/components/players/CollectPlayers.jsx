import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddPlayer from "../../containers/players/AddPlayer";
import PlayerList from "../../components/players/PlayerList";

// CollectPlayers is the main player input page component
class CollectPlayers extends Component {

	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	// when called this method calls action creator to set up the tournament structure in redux state
	onClick() {
		this.props.genTournament();
	}

	render () {
		return (
		<div className="container">
			<h2>Enter Your Players</h2>
			<h3>Please add at least 4 players below to begin</h3>
			<AddPlayer players={this.props.players}/>
			<PlayerList players={this.props.players}/>
			{/* The tournament generate button is only rendered on the screen if 4 or more players entered by user*/}
			{this.props.players.length >= 4 ?
				<Link to={"/tournament"}>
					<button className="button-generate" onClick={this.onClick}>Generate Tournament!</button>
				</Link> 
				: null}
		</div>
		);
	}

}

export default CollectPlayers;