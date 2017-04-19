import React from 'react';

export default function Cash(props) {
	const cashFlow = props.cashFlow;

	return (
		<div className="cash-counter">
	  		<label className="label">Cash Flow:</label>
	  		<span className="count">{cashFlow}€</span>
  		</div>
  	);
}
