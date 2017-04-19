import ReactDOM from 'react-dom';
import React from 'react';

import Board from 'components/board';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Board />,
		document.getElementById('root')
	);
});