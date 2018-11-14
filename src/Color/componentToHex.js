export default function componentToHex(str) {
	const hex = str.toString(16);
	if (hex.length === 1) return `0${hex}`;
	return hex;
};