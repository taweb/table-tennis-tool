import React from "react";
import { Link } from "react-router-dom";

import AddPlayer from '../../containers/players/AddPlayer';
import PlayerList from '../../containers/players/PlayerList';

const CollectPlayers = ({players}) => (
	<div>
		<p>
			<Link to={"/tournament"}>Tournament</Link>
		</p>
		<p>Please add at least 4 players below to begin</p>
		<AddPlayer />
		<PlayerList />
		{players.length >= 3 ? <button>Generate Tournament!</button> : null}
	</div>
);

export default CollectPlayers;