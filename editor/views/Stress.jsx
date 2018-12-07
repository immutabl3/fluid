import React, { Component } from 'react';
import signal from 'signal-js';
import StressPoints from './StressPoints';
import Button from './Button';

const MIN = 0;
const MAX = 1000;

export default class Stress extends Component {
	constructor() {
		super();

		this.state = {
			qty: 500,	
		};
	}

	dec = () => {
		this.setState({ qty: this.state.qty - 100 });
	}

	inc = () => {
		this.setState({ qty: this.state.qty + 100 });
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
				<StressPoints qty={ qty } />
			</div>
		);
	}
};