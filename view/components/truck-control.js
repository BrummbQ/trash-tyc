import React from 'react';

export default class TruckControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {error: null};
		this.increaseCount = this.increaseCount.bind(this);
		this.decreaseCount = this.decreaseCount.bind(this);
	}

	increaseCount(value) {
		if (this.props.costPerTruck > parseInt(this.props.cashFlow)) {
			this.setState({error: "Not enough cash!"});
			// hide error
			setTimeout(() => this.setState({error: null}), 3000);
			return;
		} else {
			this.props.onChange(1);
		}
	}

	decreaseCount(value) {
		if (this.props.truckCount <= 0) {
			this.props.onChange(0);
		} else {
			this.props.onChange(-1);
		}
	}

	render() {
		const count = this.props.truckCount;
		let error = "";
		if (this.state.error) {
			error = <p className="error">{this.state.error}</p>;
		}

		return (
			<div className="truck-control">
				<label className="label">Trucks</label>
				<span className="count">{count}</span>
				<button className="button" onClick={this.decreaseCount}>
					<i className="fa fa-minus" aria-hidden="true"></i>
				</button>
				<button className="button" onClick={this.increaseCount}>
					<i className="fa fa-plus" aria-hidden="true"></i>
				</button>
				{error}
			</div>
		);
	}
}