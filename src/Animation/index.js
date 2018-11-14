// the pool of animations...creation and recreation of 
// the animation objects and formatting of the configuration

import signal from 'signal-js';
import types from '../types';
import { parse } from '../properties';
import methods from './Animation';
import uniqueId from '../utils/uniqueId';
import debug from '../debug';

const pool = [];

const free = function() {
	pool.push(this);
	return this;
};

const reuse = (instance, config) => {
	return Object.assign(
		// clear the instance of events
		instance.clear(),
		// re-assign the configuration
		config
		// the methods and free already exist 
		// on this object
	);
};

const create = config => {
	return Object.assign(
		// create an emitter instance
		signal(), 
		// merge in the configuration
		config,
		// what makes the animation an animation
		methods,
		// the `free` method that allows for pooling
		{ free }
	);
};

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
		// by default, we're animating
		playing: true,
	};
};

export default function(from, to, options) {
	const instance = pool.pop();
	const config = formatOptions(from, to, options);
	return instance ? 
		reuse(instance, config) :
		create(config);
};