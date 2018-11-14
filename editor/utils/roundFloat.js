export default function roundFloat(float, decimals) {
	const factor = Math.pow(10, decimals);
	return Math.round(float * factor) / factor;
};
