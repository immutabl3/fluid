import Animation from './Animation';
import uniqueId from './utils/uniqueId';
import main from './main';
import types from './types';
import animations from './animations';
import timeouts from './timeouts';
import timer from './timer';
import debug from './debug';

const TICK_RATE = 1 / 60 * 1000;

const addTimeout = function(id, fn, delay) {
	timeouts.set(id, {
		fn,
		start: timer.time + delay,
	});
	return id;
};

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
		if (!keep) {
			animation.free();
			animations.delete(id);
		}
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

	animate(from, to, config) {
		const animation = Animation(from, to, config);
		const { id, delay } = animation;
		if (!delay) animations.set(id, animation);
		if (delay) addTimeout(id, () => animations.set(id, animation), delay);
		return animation;
	},

	debug() {
		console.log(`fluid: debug ${debug.toggle().slow === 3 ? 'enabled' : 'disabled'}`);
	},
});