// the crème de la crème...the memthods that make
// the animation an animation

import timeouts from '../timeouts';
import animations from '../animations';
import timer from '../timer';
import { apply } from '../properties';

export default {
	start() {
		if (this.playing) return this;
		this.playing = true;

		const id = this.id;
		if (animations.has(id)) return this;

		// wipe out the time to start from the begining
		this.time = undefined;
		// add ourselves to the animation queue
		animations.set(id, this);
		return this;
	},

	// stops the animation completely
	stop() {
		if (!this.playing) return this;
		this.playing = false;

		// clean up
		const { id } = this;
		timeouts.has(id) && timeouts.delete(id);
		animations.has(id) && animations.delete(id);
		
		return this.free();
	},

	// pause the animation so that it can be resumed
	// at a later time...same as a stop
	pause() {
		return this.stop();
	},

	// resume a paused animation
	resume() {
		if (this.playing) return this;

		const id = this.id;
		if (animations.has(id)) return this;

		// to resume, re-adjust the start time to
		// be the current time minus how far the 
		// animation has progressed previously
		this.time = timer.time - (timer.time - this.time);
		animations.set(id, this);
		return this;
	},

	end() {
		// to jump to the end, tick at the end of the duration
		this.tick(this.time + this.duration);
		// then make sure we stop
		return this.stop();
	},

	tick(time) {
		const start = this.time === undefined ? (this.time = time) : this.time;
		const tick = (time - start) / this.duration;
		const y = this.curve(tick);
		const done = tick >= 1;

		let properties;
		if (done) {
			properties = this.curve.returnsToSelf ?
				this.startProps :
				this.endProps;
		} else {
			properties = {};
			for (const key in this.startProps) {
				const startInterpolable = this.startProps[key];
				const endInterpolable = this.endProps[key];
				if (!startInterpolable || !endInterpolable) continue;
				properties[key] = startInterpolable.interpolate(endInterpolable, y);
			}
		}

		apply(this.props, properties);

		this.emit('update', this.props);
		
		if (done) {
			this.playing = false;
			this.emit('complete', this.props);
		}

		return !done;
	},
};