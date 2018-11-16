import uniqueId from './utils/uniqueId';
import main from './main';
import types from './types';
import animations from './animations';
import timeouts, { addTimeout } from './timeouts';
import timer from './timer';
import debug from './debug';

const TICK_RATE = 1 / 60 * 1000;

const callTimeouts = function() {
	if (!timeouts.size) return;

	for (const id of timeouts.keys()) {
		const timeout = timeouts.get(id);
		if (timeout.start <= timer.time) {
			timeout.fn();
			timeouts.delete(id);
		}
	}
};

const callAnimations = function() {
	if (!animations.size) return;

	for (const id of animations.keys()) {
		const animation = animations.get(id);
		const keep = animation.tick(timer.time);
		if (!keep) animations.delete(id);
	}
};

export default Object.assign(main, types, {
	tick(delta = TICK_RATE) {
		timer.time += delta;
		callTimeouts();
		callAnimations();
	},

	setTimeout(fn, delay) {
		const id = uniqueId();
		return addTimeout(id, fn, delay);
	},

	clearTimeout(obj) {
		const id = obj && obj.id !== undefined ? obj.id : obj;
		timeouts.has(id) && timeouts.delete(id);
	},

	debug() {
		console.log(`fluid: debug ${debug.toggle().slow === 3 ? 'enabled' : 'disabled'}`);
	},
});