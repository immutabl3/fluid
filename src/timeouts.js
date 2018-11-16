import timer from './timer';

// holds all pending timeouts by id
const timeouts = new Map();

export default timeouts;

export const addTimeout = function(id, fn, delay) {
	timeouts.set(id, {
		fn,
		start: timer.time + delay,
	});
	return id;
};