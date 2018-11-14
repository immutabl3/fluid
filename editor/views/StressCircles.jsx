import React, { Component } from 'react';
import range from 'lodash/range';
import StressCircle from './StressCircle';
import { branch } from 'baobab-react/higher-order';

const rangeMap = new Map();

class StressCircles extends Component {
	getRange() {
		const { qty } = this.props;
		if (rangeMap.has(qty)) return rangeMap.get(qty);

		const rng = range(qty);
		rangeMap.set(qty, rng);
		return rng;
	}
	
	renderCircle = idx => {
		return (
			<StressCircle
				key={ idx }
				index={ idx }
				name={ this.props.name }
				values={ this.props.values }
			/>
		);
	}

	render() {
		return this.getRange().map(this.renderCircle);
	}
};

export default branch({
	name: 'name',
	values: 'values',
}, StressCircles);