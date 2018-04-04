import React, { Component } from "react";

import Match from './Match';
import Bye from './Bye';

// import PlayerList from '../../components/players/PlayerList';

// main player entry page
class Round extends Component {

	constructor(props) {
		super(props);
		this.state={
			winners: [] 
		}
	}



	// triggers action to set up the redux tournament state

	render () {

		const {round} = this.props;
		
		let pairedArr = [];

		for (let i = 0; i < round.length; i+=2) {
			pairedArr.push(round.slice(i, i + 2));
		}

		return (
		<div className="roundContainer">
			<h3>{this.props.label}</h3>
			{pairedArr.map((tie, i) => {
				return tie.length===2 ?
				<Match key={i} player1={tie[0]} player2={tie[1]} />
				:
				<Bye key={i} bye={tie[0]} />
			})}
			<button className="roundButton">Move to next round</button>
		</div>
		);
	}

}

export default Round;