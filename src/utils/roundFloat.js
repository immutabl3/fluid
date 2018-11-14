export default function roundFloat(x, decimal) {
	const dec = Math.pow(10, decimal);
	return Math.round(x * dec) / dec;
};