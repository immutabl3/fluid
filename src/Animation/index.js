import signal from 'signal-js';
import types from '../types';
import { parse } from '../properties';
import methods from './Animation';
import uniqueId from '../utils/uniqueId';
import debug from '../debug';
import {
	repeatSymbol,
	yoyoSymbol,
	reversedSymbol,
	propsSymbol,
} from './symbols';

const formatOptions = (from, to, config) => {
	const id = config && config.id !== undefined ? config.id : uniqueId();
	const delay = Math.max(0, (config && config.delay !== undefined ? config.delay : 0) * debug.slow);
	const duration = Math.max(0, (config && config.duration !== undefined ? config.duration : 1000) * debug.slow);
	const type = config && config.type !== undefined ? config.type : 'spring';

	return {
		id,
		duration,
		delay,

		// the properties we're start at
		startProps: parse(from),
		// the properties we're going to
		endProps: parse(to),
		
		// no ticks have occurred, but keep the key 
		// reserved (and wipe out anything assigned)
		//
		// this needs to be public as the tick loop
		// uses this to determine timeouts/calls
		time: undefined,

		// by default, we're not animating until "start"
		// leave public for inspection by user
		playing: false,

		// this is the curve used to animate every tick
		// leave public for inspection by user
		curve: types[type](config),
		
		// PRIVATE: these are mutated by the Animation
		// and/or we don't want to risk exposing them

		// the object we mutate every tick
		[propsSymbol]: from,

		// allow the animation to repeat
		[repeatSymbol]: config.repeat || 0,

		// allow the animation to "yoyo" (default false)
		[yoyoSymbol]: !!config.yoyo,
		[reversedSymbol]: false,
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