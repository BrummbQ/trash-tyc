import React from 'react';

export default function Dump(props) {
	const dumpSize = props.dumpSite.length;

	return (
		<div className="dump-header">
	  		<img src="/truck.png" />
	  		<h1 className="title">Dump Site</h1>
	  		<span>{dumpSize}</span>
  		</div>
  	);
}
