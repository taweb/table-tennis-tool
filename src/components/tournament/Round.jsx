import React, { Component } from "react";

// import AddPlayer from '../../containers/players/AddPlayer';
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

		// console.log(pairedArr);


		// --------------------------------------------------------------------
		// let playerPairs = [["Matt", "Steve"], ["Fred", "Jill"], ["Oli"]]

		// const oneOrTheOther = arr => {

		// 	const decisionArr = [];
		// 	for(let i=0; i<arr.length; i++) {
		// 		decisionArr.push(arr[i].length === 2 ? "pair" : "single")
		// 	}

		// 	return decisionArr;
		// }

		// console.log(oneOrTheOther(playerPairs));
		// [ 'pair', 'pair', 'single' ]
		// --------------------------------------------------------------------

		return (
		<div>
			
		</div>
		);
	}

}

export default Round;