// the crème de la crème...the memthods that make
// the animation an animation

import timeouts, { addTimeout } from '../timeouts';
import animations from '../animations';
import timer from '../timer';
import { apply } from '../properties';
import {
	repeatSymbol,
	yoyoSymbol,
	reversedSymbol,
	propsSymbol,
} from './symbols';

export default {
	start() {
		// already playing
		if (this.playing) return this;
		this.playing = true;

		// already registered to play
		const id = this.id;
		if (timeouts.has(id)) return this;
		if (animations.has(id)) return this;

		// register the animation
		const { delay } = this;
		if (!delay) animations.set(id, this);
		if (delay) addTimeout(id, () => animations.set(id, this), delay);

		// wipe out the time to start from the begining
		this.time = undefined;
		
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
		
		return this;
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

	yoyo(bool) {
		this[yoyoSymbol] = !!bool;
		return this;
	},
	
	repeat(times) {
		this[repeatSymbol] = times || 0;
		return this;
	},

	state() {
		return this[propsSymbol];
	},

	tick(time) {
		if (this.time === undefined) this.emit('start');
		const start = this.time === undefined ? (this.time = time) : this.time;
		const tick = (time - start) / this.duration;
		const y = this.curve(tick);
		const done = tick >= 1;

		let properties;
		if (done) {
			// if we're yoyoing
			if (this[yoyoSymbol]) {
				// reverse the props
				this[reversedSymbol] = !this[reversedSymbol];
			}

			// if we repeat
			if (this[repeatSymbol] > 0) {
				// reduce the number of repeats
				if (Number.isFinite(this[repeatSymbol])) this[repeatSymbol] -= 1;
				// add the time to the duration
				this.time += this.duration;
				// and return true to continue animating
				return true;
			}
		}

		if (!done) {
			properties = {};
			const reversed = this[reversedSymbol];
			for (const key in this.startProps) {
				const startInterpolable = reversed ? 
					this.endProps[key] :
					this.startProps[key];
				const endInterpolable = reversed ?
					this.startProps[key] :
					this.endProps[key];
				if (!startInterpolable || !endInterpolable) continue;
				properties[key] = startInterpolable.interpolate(endInterpolable, y);
			}
		} else {
			// ensure when done with the animation, we
			// are at the end properties
			properties = {};
			const reversed = this[reversedSymbol];
			const props = reversed ? this.startProps : this.endProps;
			for (const key in props) {
				const interpolable = props[key];
				if (!interpolable) continue;
				properties[key] = interpolable.value;
			}
		}

		apply(this[propsSymbol], properties);

		this.emit('update', this[propsSymbol]);
		
		if (done) {
			this.playing = false;
			this.emit('complete', this[propsSymbol]);
		}

		return !done;
	},
};