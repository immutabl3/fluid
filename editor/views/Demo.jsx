import React from 'react';
import Circles from './Circles';

export default function Demo() {
	return (
		<section className="demo">
			<div className="track">
				<span className="dot" />
				<span className="dot" />
				<span className="index">0</span>
				<span className="index">1</span>
				<Circles />
			</div>
		</section>
	);
};