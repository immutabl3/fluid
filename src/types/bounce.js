const defaults = {
	frequency: 300,
	friction: 200,
};

export default Object.assign(function bounce(config = {}) {
	const options = { ...defaults, ...config };
	const frequency = Math.max(1, options.frequency / 20);
	const friction = Math.pow(20, options.friction / 100);
	const A = t => Math.pow(friction / 10, -t) * (1 - t);
	
	return Object.assign(function(t) {
		const b = -3.14 / 2;
		const a = 1;
		const At = A(t);
		const angle = frequency * t * a + b;
		return At * Math.cos(angle);
	}, {
		returnsToSelf: true,
	});
}, {
	defaults,
	type: 'bounce',
});