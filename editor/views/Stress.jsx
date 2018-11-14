import React, { Component } from 'react';
import signal from 'signal-js';
import StressCircles from './StressCircles';
import Button from './Button';

const MIN = 0;
const MAX = 100;

export default class Stress extends Component {
	constructor() {
		super();

		this.state = {
			qty: 20,	
		};
	}

	dec = () => {
		this.setState({ qty: this.state.qty - 10 });
	}

	inc = () => {
		this.setState({ qty: this.state.qty + 10 });
	}

	render() {
		const { qty } = this.state;
		return (
			<div className="stress">
				<Button
					className="dec"
					onClick={ this.dec }
					disabled={ qty <= MIN }
				>
					-
				</Button>
				<Button onClick={ () => signal.emit('stress') }>
					End { qty }
				</Button>
				<Button
					className="inc"
					onClick={ this.inc }
					disabled={ qty >= MAX }
				>
					+
				</Button>
				<StressCircles qty={ qty } />
			</div>
		);
	}
};