import React from "react";

// simple input component that has onChange method and value passed down from parent as props
const Input = ({onChange, value}) => (
	<input onChange={onChange} value={value} />
);

export default Input;