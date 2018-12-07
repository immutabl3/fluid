import React from 'react';
import signal from 'signal-js';
import Name from './Name';
import Sliders from './Sliders';
import Yoyo from './Yoyo';
import Button from './Button';

export default function Settings() {
	return (
		<div className="settings">
			<Name />
			<Sliders />
			<div className="settings__extra">
				<Yoyo />
				<Button onClick={ () => signal.emit('stress') }>
					Stress
				</Button>
			</div>
		</div>
	);
};