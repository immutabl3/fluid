import React, { Component } from 'react';
import signal from 'signal-js';
import UIGraph from '../UIGraph';
import fluid from '../../src';

export default class Canvas extends Component {
	onRef = canvas => {
		if (!canvas) return;
		if (this.graph) return;

		this.graph = new UIGraph(canvas);
		this.graph.pointsChanged = () => signal.trigger('points', this.graph.points);
		
		signal.trigger('graph', this);
	}

	refresh = ({ name, values, points, editable }) => {
		this.graph.curve = fluid[name](values);
		this.graph.points = points;
		this.graph.editable = editable;
		this.graph.draw();
	}

	update = ({ name, values }) => {
		this.graph.curve = fluid[name](values);
		this.graph.draw();
	}

	render() {
		return (
			<canvas 
				ref={ this.onRef }
				tabIndex={ 0 }
				width={ 346 }
				height={ 346 }
			/>
		);
	}
};