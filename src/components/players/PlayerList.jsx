import React from 'react';

const PlayerList = ({players}) => (
	<div>
		<h2>Players</h2>
		<ul>
			{players.map((player, i) => {
				// <PlayerItem key={player.id} player={player}/>
				return <p>id: {player.id}, player: {player.name}</p>
			})}
		</ul>
	</div>
);

export default PlayerList;