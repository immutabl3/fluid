import React from 'react';

const stop = e => e.stopPropagation();

export default function Editor({ children }) {
	return (
		<div
			className="editor"
			onClick={ stop }
		>
			{ children }
		</div>
	);
};