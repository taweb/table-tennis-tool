import React from "react";
import { Link } from "react-router-dom";
import Round from "./Round";

const ShowTournament = ({rounds}) => {

	let labelArr = [];

	// logic to create array of labels to be used for rendering titles of rounds (if Quarter-Final, Semi-Final, Final)
	// eslint-disable-next-line
	rounds !== undefined ?
		rounds.map((item, i) => {
			let label = "";
			let namedRound = item.length <= 8;
			namedRound ?
			label = item.length === 2 ? "Final" : item.length <= 4 ? "Semi-Final" : "Quarter-Final"
			:
			label = "Round " + (i + 1);
			return labelArr.push(label);
		})
	:
	null;

	return (
		<div className="container">
			<h2>Your Tournament Draw</h2>
			{rounds === undefined ?
				<div>
					<p>It seems you have visited the tournament page prematurely, please follow the link and enter your team</p>
					<Link to={"/"}>
						<button className="button-nav">Enter Your Players</button>
					</Link>
				</div>
			:
			rounds.map((round, i) => 
				<Round label={labelArr[i]} key={i} round={round} />
			)
			
			}
		</div>
	);
}

export default ShowTournament;