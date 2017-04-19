import React from 'react';

export default class Counter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const trashCount = this.props.trash.length;

		return (
			<div className="trash-counter">
				<label className="label">Trash Count:</label>
				<span className="count">{trashCount}</span>
			</div>
		);
	}
}