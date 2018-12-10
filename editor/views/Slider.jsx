import React, { Component } from 'react';
import clamp from 'clamp';
import signal from 'signal-js';

const WIDTH = 194;

export default class Slider extends Component {
	constructor(props) {
		super();

		const { value, min, max } = props;
		const left = (value - min) / (max - min) * WIDTH;
		
		this.state = {
			left,
			dragging: false,
		};
	}

	onSliderDown = e => {
		const { layerX } = e.nativeEvent;
		
		const {
			pageX,
			pageY,
		} = e;
		
		const {
			min,
			max,
		} = this.props;
		
		
		this.setState({
			left: Math.round(layerX / (WIDTH + 11) * WIDTH),
		}, () => {
			const name = this.props.property;
			const value = Math.round(layerX / (WIDTH + 11) * (max - min) + min);
			signal.emit('setting', { name, value });
			
			this.onControlDown({ pageX, pageY });
		});
	}

	onControlDown = e => {
		e.stopPropagation && e.stopPropagation();
		
		this.startPoint = [e.pageX, e.pageY];
		this.startLeft = this.state.left;
		this.setState({ dragging: true });

		window.addEventListener('mousemove', this.windowMouseMove);
		window.addEventListener('mouseup', this.windowMouseUp);
	}

	windowMouseMove = e => {
		if (!this.state.dragging) return;
		
		const {
			min,
			max,
		} = this.props;

		const dX = e.pageX - this.startPoint[0];
		const left = clamp(this.startLeft + dX, 0, WIDTH);
		
		this.setState({ left }, () => {
			const name = this.props.property;
			const value = Math.round(left / WIDTH * (max - min) + min);
			signal.emit('setting', { name, value });
		});
	}

	windowMouseUp = () => {
		this.setState({ dragging: false });
		window.removeEventListener('mousemove', this.windowMouseMove);
		window.removeEventListener('mouseup', this.windowMouseUp);
	}

	render() {
		const { left, dragging } = this.state;
		const { value, property } = this.props;
		
		if (property === 'points') return null;

		return (
			<div>
				<label>
					{ property }
				</label>
				<div className={ `value ${property}` }>
					{ value }
				</div>
				<div
					className={ `slider ${property}` }
					onMouseDown={ this.onSliderDown }
				>
					<div className="bar" />
					<div
						className={ `control ${dragging ? 'highlighted' : ''}` }
						onMouseDown={ this.onControlDown }
						style={ { left } }
					/>
				</div>
			</div>
		);
	}
};