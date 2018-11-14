import InterpolableArray from './InterpolableArray';
import InterpolableObject from './InterpolableObject';
import InterpolableNumber from './InterpolableNumber';
import InterpolableString from './InterpolableString';

// from least to most likely
const classes = [
	InterpolableObject,
	InterpolableArray,
	InterpolableString,
	InterpolableNumber,
];

export default function createInterpolable(value) {
	let idx = classes.length;
	while (idx--) {
		const interpolable = classes[idx].create(value);
		if (interpolable) return interpolable;
	}
};