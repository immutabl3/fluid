import roundFloat from '../utils/roundFloat';

export default class InterpolableNumber {
	constructor(value) {
		this.value = parseFloat(value);
	}

	static create = function(value) {
		if (typeof value !== 'number') return;
		return new InterpolableNumber(value);
	}

	interpolate(endInterpolable, tick) {
		const start = this.value;
		const end = endInterpolable.value;
		return new InterpolableNumber((end - start) * tick + start);
	}

	format() {
		return roundFloat(this.value, 5);
	}
};