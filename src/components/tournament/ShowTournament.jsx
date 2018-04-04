import React from "react";
import { Link } from "react-router-dom";

const ShowTournament = ({rounds}) => {

	console.log(rounds);
 
	return (
		<div>
			{rounds === undefined ?
				<div>
					<p>It seems you have visited the tournament page prematurely, please follow the link and enter your team</p>
					<Link to={"/"}>CollectPlayers</Link>
				</div>
			:null}
		</div>
	);
}

export default ShowTournament;