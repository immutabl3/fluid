export default function generateValues(settings) {
	return Object.keys(settings)
		.reduce((memo, key) => {
			memo[key] = settings[key].value;
			return memo;
		}, {
			duration: 1000,
		});
};