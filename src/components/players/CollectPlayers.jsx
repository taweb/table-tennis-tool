import React from "react";
import { Link } from "react-router-dom";

import AddPlayer from '../../containers/players/AddPlayer';
import PlayerList from '../../containers/players/PlayerList';

const CollectPlayers = () => (
	<div>
		<p>
			<Link to={"/tournament"}>Tournament</Link>
		</p>
		<AddPlayer />
		<PlayerList />
	</div>
);

export default CollectPlayers;