import Trash from 'components/trash';
import Counter from 'components/counter';
import Cash from 'components/cash';
import City from 'components/city';
import Dump from 'components/dump';
import Control from 'components/control';
import TruckControl from 'components/truck-control'

import Game from 'lib/game';

import React from 'react';

export default class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {trash: [], truckCount: 0, dumpSite: [], cashIncome: 0, cashFlow: 0, costPerTruck: 10};
		this.game = new Game();

		this.playRound = this.playRound.bind(this);
		this.truckCount = this.truckCount.bind(this);
	}

	render() {
		return (
			<div className="game-board">
		    	<div className="columns">
		    		<section className="column control">
		    			<h1 className="title">Control</h1>
		    			<Control onAction={this.playRound}/>
		    			<TruckControl onChange={this.truckCount} truckCount={this.state.truckCount} cashFlow={this.state.cashFlow} costPerTruck={this.state.costPerTruck} />
		    		</section>
		    		<div className="column">
			    		<City />
			    		{this.state.trash.map((item, index) => {
			    			return <Trash key={index} name={item.name} />
			    		})}
		    		</div>
		    		<div className="column">
		    			<Dump dumpSite={this.state.dumpSite} />
		    		</div>
		    	</div>
		    	<footer className="footer">
		    		<Counter trash={this.state.trash} />
		    		<Cash cashFlow={this.state.cashFlow} />
		    	</footer>
	    	</div>
	  	);
	}

	calculateCashFlow(state) {
		return state.cashIncome - (state.truckCount * state.costPerTruck);
	}

	truckCount(change) {
		this.setState((prevState) => {
			prevState.truckCount += change;

			return {
				truckCount: prevState.truckCount,
				cashFlow: this.calculateCashFlow(prevState)
			};
		});
	}

	applyEvents() {
		let state = this.state;

		this.game.fetchEvents().then((data) => {
			data.trash.forEach((item) => {
				for (let i = 0; i < item.count; ++i) {
					state.trash.push(item);
				}
			})

			state.cashIncome = data.cashIncome;
			state.cashFlow = this.calculateCashFlow(state);
			this.setState(state);
		});
	}

	playRound() {
		let trash = this.state.trash;
		let dumpSite = this.state.dumpSite;
		const truckCapacity = this.state.truckCount * 10;
		
		// transfer trash according to number of trucks
		for (let i = 0; i < truckCapacity; ++i) {
			const trashItem = trash.shift();
			if (!trashItem) break;
	 		dumpSite.push(trashItem);
		}
		this.setState({trash: trash, dumpSite: dumpSite});

		this.applyEvents();
	}

	componentDidMount() {
		this.applyEvents();
	}

	componentWillUnmount() {
	}
}