import React from 'react';

const Match = ({player1, player2}) => { 

	return (
		<div className="tie">
			{player1.length ? 
				<p>{player1}</p>
				:
				<p className="player-tbc">TBC</p>
			}	
			<p className="match-vs">vs.</p>
			{player2.length ?
				<p>{player2}</p>
				:
				<p className="player-tbc">TBC</p>
			}
		</div>
	);
}
export default Match;