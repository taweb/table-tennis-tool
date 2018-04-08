import React from "react";

const Input = ({className, onChange, value}) => (
	<input className={className} placeholder="Enter a name.."onChange={onChange} value={value} />
);

export default Input; 