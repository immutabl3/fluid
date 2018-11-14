import Color from './index';

const rExpand = /^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i;
const rParse = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

const expand = hex => {
	const match = hex.match(rExpand);
	if (!match) return hex;
	const [r, g, b] = match;
	return `#${r}${r}${g}${g}${b}${b}`;
};

export default function fromHex(hex) {	
	const [r, g, b] = expand(hex).match(rParse);

	return new Color({
		r: parseInt(r, 16),
		g: parseInt(g, 16),
		b: parseInt(b, 16),
		a: 1,
	}, 'hex');
};