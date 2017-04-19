import React from 'react';

export default function Control(props) {
	function handleMore(e) {
		e.preventDefault();
		props.onAction();
	}

	return (
		<button type="button" onClick={handleMore}>Next</button>
  	);
}
