import React from 'react';

export default function Trash(props) {
	const type = "-" + props.name;

	return (
		<div className={`trash-item ${type}`}></div>
  );
}
