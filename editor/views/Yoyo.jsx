import React from 'react';
import signal from 'signal-js';
import { branch } from 'baobab-react/higher-order';

const onChange = e => signal.emit('yoyo', e.target.checked);

const Yoyo = function({ checked }) {
	return (
		<div className="yoyo">
			<input
				id="yoyo"
				type="checkbox"
				checked={ checked }
				onChange={ onChange }
			/>
			<label htmlFor="yoyo">
				yoyo
			</label>
		</div>
	);
};

export default branch({
	checked: ['settings', 'yoyo', 'value'],
}, Yoyo);