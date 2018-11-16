import signal from 'signal-js';
import types from '../types';
import { parse } from '../properties';
import methods from './Animation';
import uniqueId from '../utils/uniqueId';
import debug from '../debug';

const formatOptions = (from, to, config) => {
	const id = config && config.id !== undefined ? config.id : uniqueId();
	const delay = Math.max(0, (config && config.delay !== undefined ? config.delay : 0) * debug.slow);
	const duration = Math.max(0, (config && config.duration !== undefined ? config.duration : 1000) * debug.slow);
	const type = config && config.type !== undefined ? config.type : 'spring';

	return {
		// save these two options
		id,
		duration,
		delay,
		// no ticks have occurred, but keep the key 
		// reserved (and wipe out anything assigned)
		time: undefined,
		// the object we mutate every tick
		props: from,
		// the properties we're start at
		startProps: parse(from),
		// the properties we're going to
		endProps: parse(to),
		// this is the curve used to animate every tick
		curve: types[type](config),
		// by default, we're not animating until "start"
		playing: false,
	};
};

export default function(from, to, options) {
	return Object.assign(
		// create an emitter instance
		signal(), 
		// merge in the configuration
		formatOptions(from, to, options),
		// what makes the animation an animation
		methods,
	);
};