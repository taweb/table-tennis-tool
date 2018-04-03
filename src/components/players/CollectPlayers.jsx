import React from "react";
import { Link } from "react-router-dom";

import AddPlayer from './AddPlayer';

const CollectPlayers = () => (
	<div>
		<p>
			<Link to={"/tournament"}>Tournament</Link>
		</p>
		<AddPlayer />
	</div>
);

export default CollectPlayers;