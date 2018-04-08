import React from "react";
import PlayerItem from "../../containers/players/PlayerItem";

const PlayerList = ({players}) => (
	<div>
		{players.length !== 0 ? 
			<h2>Players</h2>
			:
			null
		}
		<ul className="list-container">
			{players.map((player, i) => {
				return <PlayerItem key={player.id} player={player} players={players} />
			})}
		</ul>
	</div>
);

export default PlayerList;