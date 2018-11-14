import Color from './index';

const rParse = /^rgba?\(([0-9.]*), ?([0-9.]*), ?([0-9.]*)(?:, ?([0-9.]*))?\)$/;

export default function fromRgb(rgb) {
	const match = rgb.match(rParse);
	if (!match) return;
	const [r, g, b, a = 1] = match;
	return new Color({
		r: parseFloat(r),
		g: parseFloat(g),
		b: parseFloat(b),
		a: parseFloat(a),
	}, 'rgba');
};