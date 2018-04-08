import React from "react";

// simple input component that has onChange method and value passed down from parent as props
const Input = ({className, onChange, value}) => (
	<input className={className} placeholder="Enter a name.."onChange={onChange} value={value} />
);

export default Input; 