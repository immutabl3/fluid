import InterpolableColor from './InterpolableColor';
import InterpolableNumber from './InterpolableNumber';

const types = [
	{
		re: /(#[a-f\d]{3,6})/ig,
		create: InterpolableColor.create,
		parse: value => value,
	},
	{
		re: /(rgba?\([0-9.]*, ?[0-9.]*, ?[0-9.]*(?:, ?[0-9.]*)?\))/ig,
		create: InterpolableColor.create,
		parse: value => value,
	},
	{
		re: /([-+]?[\d.]+)/ig,
		create: InterpolableNumber.create,
		parse: parseFloat
	}
];

const sortByIndex = (left, right) => left.index > right.index ? 1 : -1;

export default class InterpolableString {
	constructor(parts) {
		this.parts = parts;
	}

	static create = function(val) {
		const value = `${val}`;
		const matches = types.reduce((matches, { re, create, parse }) => {
			let match;
			while (match = re.exec(value)) {
				matches.push({
					index: match.index,
					length: match[1].length,
					interpolable: create(parse(match[1]))
				});
			}
			return matches;
		}, [])
			.sort(sortByIndex);
		
		let index = 0;
		const parts = matches.reduce((parts, match) => {
			if (match.index < index) return parts;
			if (match.index > index) parts.push(value.substring(index, match.index));
			parts.push(match.interpolable);
			index = match.index + match.length;
			return parts;
		}, []);

		if (index < value.length) parts.push(value.substring(index));
		
		return new InterpolableString(parts);
	}

	interpolate(endInterpolable, tick) {
		const start = this.parts;
		const end = endInterpolable.parts;
		const newParts = [];

		let idx = 0;
		let len = 0;
		const ref = Math.min(start.length, end.length);
		for (; 0 <= ref ? len < ref : len > ref; idx = 0 <= ref ? ++len : --len) {
			if (start[idx].interpolate) {
				newParts.push(start[idx].interpolate(end[idx], tick));
			} else {
				newParts.push(start[idx]);
			}
		}

		return new InterpolableString(newParts);
	}

	format() {
		return this.parts
			.map(val => val.format ? val.format() : val)
			.join('');
	}
};