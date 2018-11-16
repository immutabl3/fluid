import React, { Component } from 'react';
import toStyle from '@immutabl3/to-style';
import fluid from '../../src';
import random from 'lodash/random';

const startX = () => global.innerWidth * 0.2;
const endX = () => global.innerWidth * 0.8;

export default class StressCircle extends Component {
	constructor() {
		super();

		this.delay = random(0, 100);
		this.anim = undefined;

		this.style = {
			scale: 0.5,
			opacity: 0.5,
			x: startX(),
			y: random(0, global.innerHeight),
		};

		this.state = {
			index: 0,
		};
	}

	componentDidMount() {
		this.mounted = true;
		this.start();
	}

	componentWillUnmount() {
		this.mounted = false;
		this.anim && this.anim.stop();
	}

	start = () => {
		const { name, values } = this.props;
		this.anim = fluid(this.style, {
			x: endX(),
			scale: 1,
			opacity: 1,
		}, {
			type: name,
			delay: this.anim ? 0 : this.delay,
			...values,
		})
			.on('update', this.rerender)
			.on('complete', () => {
				this.anim = fluid(this.style, {
					x: startX(),
					opacity: 0.5,
					scale: 0.5,
				}, {
					...values,
				})
					.on('update', this.rerender)
					.on('complete', this.start)
					.start();
			})
			.start();
	}

	rerender = () => {
		if (!this.mounted) return;
		this.setState({ index: this.state.index + 1 });
	}

	render() {
		return (
			<div
				className="circle"
				data-index={ this.props.index }
				style={ toStyle(this.style) }
			/>
		);
	}
}