import React from 'react';

import DumpColumn from 'components/dump-column';

export default function Dump(props) {
	const dumpSize = props.dumpSite.length;
	let groupedTrash = {};
	groupedTrash.easy = props.dumpSite.filter((trash) => trash.name === 'easy');
	groupedTrash.medium = props.dumpSite.filter((trash) => trash.name === 'medium');
	groupedTrash.hard = props.dumpSite.filter((trash) => trash.name === 'hard');

	return (
		<div className="dump-header">
	  		<img src="/truck.png" />
	  		<h1 className="title">Dump Site</h1>
	  		{dumpSize <= 0 && <span>Try to assign some trucks</span>}
	  		<div className="columns">
	    		{Object.keys(groupedTrash).map((key, index) => {
	    			return <DumpColumn key={index} trash={groupedTrash[key]} />
	    		})}
	  		</div>
  		</div>
  	);
}
