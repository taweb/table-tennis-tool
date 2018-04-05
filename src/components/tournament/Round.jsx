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
		
		// ----------
		// GET NUMBER OF BYES

		let nextSquare = 0;
		let exp = 0;

		while (nextSquare < round.length){
			exp++;
			nextSquare = Math.pow(2, exp)
		}

		let numByes = nextSquare - round.length;


		// -----------

		let byePlayers = round.splice(round.length - numByes);

		let byeArr = [];

		for (let i=0; i < byePlayers.length; i++) {
			byeArr.push(byePlayers.slice(i, i+1));
		} 

		let pairArr = [];

		for (let j=0; j < round.length; j+=2) {
			pairArr.push(round.slice(j, j + 2));
		}

		let finalArr = pairArr.concat(byeArr);



		return (
		<div className="roundContainer">
			<h3>{this.props.label}</h3>
			{finalArr.map((tie, i) => {
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