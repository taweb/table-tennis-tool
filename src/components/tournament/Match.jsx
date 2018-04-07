import React from 'react';

const Match = ({player1, player2}) => { 

	return (
		<div className="match">
			<p>{player1}</p>
			<p className="match-vs">vs.</p>
			<p>{player2}</p>
		</div>
	);
}
export default Match;