import React from "react";
import { Link } from "react-router-dom";
import Round from "./Round";

const ShowTournament = ({rounds}) => {

 
	return (
		<div>
			{rounds === undefined ?
				<div>
					<p>It seems you have visited the tournament page prematurely, please follow the link and enter your team</p>
					<Link to={"/"}>CollectPlayers</Link>
				</div>
			:
			rounds.map((round, i) => 
				<Round key={i} round={round} />
			)
			}

		</div>
	);
}

export default ShowTournament;