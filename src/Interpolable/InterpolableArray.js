import Interpolable from './';
import isDefined from '../utils/isDefined';

const valueToInterpolable = val => Interpolable(val) || val;

export default class InterpolableArray {
	constructor(values) {
		this.values = values;
	}

	static create = function(value) {
		if (!Array.isArray(value)) return;

		return new InterpolableArray(
			value.map(valueToInterpolable).filter(isDefined)
		);
	}

	interpolate(endInterpolable, tick) {
		const start = this.values;
		const end = endInterpolable.values;
		const newValues = [];

		let idx = 0;
		let len = 0;
		const ref = Math.min(start.length, end.length);
		for (; 0 <= ref ? len < ref : len > ref; idx = 0 <= ref ? ++len : --len) {
			if (start[idx].interpolate) {
				newValues.push(start[idx].interpolate(end[idx], tick));
			} else {
				newValues.push(start[idx]);
			}
		}
		return new InterpolableArray(newValues);
	}

	format() {
		return this.values.map(val => val.format ? val.format() : val);
	}
};