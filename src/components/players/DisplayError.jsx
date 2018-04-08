import React from 'react';
// import PlayerItem from '../../containers/players/PlayerItem';

const DisplayError = ({className, error}) => (
	<div>
		<p className={["error", className].join(' ')} >{error}</p>
	</div>
);

export default DisplayError;