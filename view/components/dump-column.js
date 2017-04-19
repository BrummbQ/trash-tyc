import React from 'react';

import Trash from 'components/trash';

export default function DumpColumn(props) {
	const trash = props.trash;

	return (
		<div className="dump-column column">
			{trash.map((item, index) => {
				return <Trash key={index} name={item.name} />
			})}
			{trash.length > 0 &&
				<p className="count">{trash.length} Items</p>
			}
		</div>
  );
}
