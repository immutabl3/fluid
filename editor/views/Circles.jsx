import React, { Component } from 'react';
import signal from 'signal-js';
import Circle from './Circle';
import uniqueId from 'lodash/uniqueId';
import { branch } from 'baobab-react/higher-order';
import fluid from '../../src';

class Circles extends Component {
	constructor() {
		super();

		this.circleReferences = new Map();

		this.state = {
			circles: [],
		};
	}

	componentDidMount() {
		this.mounted = true;
		signal.emit('circles', this);
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	onStart = (id, ref) => {
		this.circleReferences.set(id, ref);
	}

	onDeath = id => {
		this.circleReferences.has(id) && this.circleReferences.delete(id);

		// remove this circle from rendering
		const newCircles = this.state.circles.filter(circle => circle.id !== id);
		this.setState({ circles: newCircles });		
	}

	onCycle = () => {
		this.restartAnimationTimeout = fluid.setTimeout(this.start, 300);
	}

	start = () => {
		if (!this.mounted) return;

		const name = this.props.name;
		const values = this.props.values;
	
		// kill existing circles
		const { circleReferences } = this;
		this.state.circles.forEach(({ id }) => circleReferences.has(id) && circleReferences.get(id).kill());
			
		// clear the restart timeout
		fluid.clearTimeout(this.restartAnimationTimeout);
		// calculate force
		const initialForce = fluid[name](values).initialForce;

		this.setState({
			circles: [
				// keep the old circles...we 
				// don't remove them here
				...this.state.circles,
				// create a new circle
				{
					id: uniqueId(),
					initialForce,
					values: {
						...values,
						type: name,
						initialForce,
					},
					onStart: this.onStart,
					onDeath: this.onDeath,
					onCycle: this.onCycle,
				}
			],
		});
	}

	renderCircle = data => {
		return (
			<Circle
				key={ data.id }
				{...data}
			/>
		);
	}

	render() {
		return this.state.circles.map(this.renderCircle);
	}
};

export default branch({
	name: ['name'],
	values: ['values'],
}, Circles);