import React, { Component } from 'react';
import toStyle from '@immutabl3/to-style';
import fluid from '../../src';

export default class Circle extends Component {
	constructor(props) {
		super(props);

		this.dying = false;
		this.anim = undefined;
		this.style = {
			scale: 0,
			opacity: 1,
			x: 0,
		};

		this.state = {
			index: 0,
		};
	}

	componentDidMount() {
		this.mounted = true;
		this.props.onStart(this.props.id, this);
		this.start();
	}

	componentWillUnmount() {
		this.mounted = false;
		this.anim && this.anim.stop();
	}

	rerender = () => {
		if (!this.mounted) return;
		this.setState({ index: this.state.index + 1 });
	}

	start() {
		this.anim = fluid.animate(this.style, {
			scale: 1,
			opacity: 1,
		}, {
			type: 'spring',
			friction: 300,
			duration: 800,
		})
			.on('update', this.rerender)
			.on('complete', () => {
				this.anim = fluid.animate(this.style, { x: 350 }, {
					...this.props.values,
					delay: 250,
				})
					.on('update', this.rerender)
					.on('complete', this.props.onCycle);
			});
	}

	kill() {
		if (this.dying) return;
		this.dying = true;

		this.anim && this.anim.stop();

		const x = this.props.values.initialForce || this.anim.curve.returnsToSelf ? 0 : this.style.x;
		this.anim = fluid.animate(this.style, {
			x,
			opacity: 0,
			scale: 0,
		}, {
			type: 'easeInOut',
			duration: 250,
		})
			.on('update', this.rerender)
			.on('complete', () => this.props.onDeath(this.props.id));
	}

	render() {
		const style = toStyle(this.style);
		return (
			<div
				className="circle"
				style={ style }
			/>
		);
	}
};