import Interpolable from './Interpolable';

export const parse = function(obj) {
	const keys = Object.keys(obj);
	return keys.reduce((properties, key) => {
		properties[key] = Interpolable(obj[key]);
		return properties;
	}, Object.create(null));
};

export const apply = function(from, to) {
	for (const key in to) {
		const value = to[key];
		if (key in from) {
			from[key] = value.format ? value.format() : value;
		}
	}
};