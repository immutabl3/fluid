import React, { Component } from 'react';
import range from 'lodash/range';
import StressPoint from './StressPoint';
import { branch } from 'baobab-react/higher-order';
import fluid from '../../src';
import random from 'lodash/random';
import signal from 'signal-js';

const width = global.innerWidth;
const height = global.innerHeight;

const startX = () => width * 0.2;
const startY = () => height * 0.1;
const endX = () => width * 0.8;
const endY = () => height * 0.9;

class StressPoints extends Component {
	constructor() {
		super();

		this.state = {
			render: 0,
		};
	}

	componentDidMount() {
		this.points = [];
		this.animations = this.getRange(this.props.qty);
		signal.on('tick', this.update);

		this.setState({ render: this.state.render + 1 }); // eslint-disable-line
	}

	componentDidUpdate(prevProps) {
		if (this.props.qty === prevProps.qty) return;

		this.animations.forEach(circle => circle.stop());
		this.animations = this.getRange(this.props.qty);

		this.points = [];

		this.setState({ render: this.state.render + 1 }); // eslint-disable-line
	}

	componentWillUnmount() {
		signal.off('tick', this.update);

		this.animations.forEach(circle => circle.stop());
		this.animations = undefined;
		
		this.points = undefined;
	}

	getRange(qty) {
		const { name, values } = this.props;
		return range(qty)
			.map(() => {
				return fluid({
					x: startX(),
					y: random(startY(), endY()),
				}, {
					x: endX(),
				}, {
					...values,
					type: name,
					delay: random(0, values.duration),
					yoyo: true,
					repeat: Infinity,
				})
					.start();
			});
	}

	update = () => {
		for (let idx = 0; idx < this.points.length; idx++) {
			const point = this.points[idx];
			const animation = this.animations[idx];
			const { x, y } = animation.state();
			point.transform = `translate3d(${x}px, ${y}px, 1px)`;
		}
	}

	register(idx, ref) {
		if (!ref) return;
		this.points[idx] = ref.style;
	}
	
	renderCircle = (circle, idx) => {
		return (
			<StressPoint
				key={ circle.id }
				onRef={ ref => this.register(idx, ref) }
			/>
		);
	}

	render() {
		if (this.state.render === 0) return null;
	
		return this.animations.map(this.renderCircle);
	}
};

export default branch({
	name: 'name',
	values: 'values',
}, StressPoints);