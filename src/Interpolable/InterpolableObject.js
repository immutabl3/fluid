import Interpolable from './';

export default class InterpolableObject {
	constructor(obj) {
		this.obj = obj;
	}

	static create = function(value) {
		if (!(value instanceof Object)) return;
		
		const obj = {};
		for (const key in value) {
			const val = value[key];
			obj[key] = Interpolable(val);
		}
		return new InterpolableObject(obj);
	}

	interpolate(endInterpolable, tick) {
		const start = this.obj;
		const end = endInterpolable.obj;
		const newObj = {};
		for (const key in start) {
			const val = start[key];
			newObj[key] = val.interpolate ? val.interpolate(end[key], tick) : val;
		}
		return new InterpolableObject(newObj);
	}

	format() {
		return this.obj;
	}
};
