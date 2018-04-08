import React, { Component } from "react";

import Match from './Match';
import Bye from './Bye';

class Round extends Component {
	constructor(props) {
		super(props);
		this.state={
			winners: [] 
		}
	} 

	render () {

		const {round} = this.props;
		
		// -----------------------------------------------
		// getting number of byes needed in the round

		let nextSquare = 0;
		let exp = 0;

		while (nextSquare < round.length){
			exp++;
			nextSquare = Math.pow(2, exp)
		}

		// work out byes from number of players and the next highest power of 2
		let numByes = nextSquare - round.length;
		// -----------------------------------------------

		// -----------------------------------------------
		// formatting round array to be nested arrays of either pairs or single values ready for render

		// split players off the round array which will be given a bye
		let byePlayers = round.splice(round.length - numByes);

		let byeArr = [];

		// push into byeArr arrays of a single name
		for (let i=0; i < byePlayers.length; i++) {
			byeArr.push(byePlayers.slice(i, i+1));
		} 

		let pairArr = [];

		// push into pairArr arrays of pairs of names
		for (let j=0; j < round.length; j+=2) {
			pairArr.push(round.slice(j, j + 2));
		}

		// recombine all round names into single formatted array
		let finalArr = pairArr.concat(byeArr);
		// -------------------------------------------------


		return (
		<div>
			{finalArr.map((tie, i) => {
				return tie.length===2 ?
				<Match key={i} player1={tie[0]} player2={tie[1]} />
				:
				<Bye key={i} bye={tie[0]} />
			})}
			{/*<button className="roundButton">Move to next round</button>*/}
		</div>
		);
	}

}

export default Round;