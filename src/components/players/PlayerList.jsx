import React from 'react';
import PlayerItem from '../../containers/players/PlayerItem';

const PlayerList = ({players}) => (
	<div>
		<h2>Players</h2>
		<ul>
			{players.map((player, i) => {
				return <PlayerItem key={player.id} player={player} />
			})}
		</ul>
	</div>
);

export default PlayerList;