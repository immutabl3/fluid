import React from 'react';
import noop from 'lodash/noop';

export default function Button({
	className = {},
	onClick = noop,
	disabled = false,
	children
}) {
	return (
		<button
			role="button"
			className={ `button ${className}` }
			onClick={ onClick }
			disabled={ disabled }
		>
			{ children }
		</button>
	);
};