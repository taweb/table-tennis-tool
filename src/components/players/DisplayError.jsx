import React from 'react';

const DisplayError = ({className, error}) => (
	<div>
		<p className={["error", className].join(' ')} >{error}</p>
	</div>
);

export default DisplayError;