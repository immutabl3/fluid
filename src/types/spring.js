const defaults = {
	frequency: 300,
	friction: 200,
	anticipationSize: 0,
	anticipationStrength: 0,
};

export default Object.assign(function spring(config = {}) {
	const options = { ...defaults, ...config };
	const frequency = Math.max(1, options.frequency / 20);
	const friction = Math.pow(20, options.friction / 100);
	const s = options.anticipationSize / 1000;
	const A1 = function(t) {
		const M = 0.8;
		const x0 = s / (1 - s);
		const x1 = 0;
		const b = (x0 - (M * x1)) / (x0 - x1);
		const a = (M - b) / x0;
		return (a * t * options.anticipationStrength / 100) + b;
	};
	const A2 = t => Math.pow(friction / 10, -t) * (1 - t);
	
	return function(t) {
		const frictionT = (t / (1 - s)) - (s / (1 - s));
		let A;
		let a;
		let b;
		if (t < s) {
			const yS = (s / (1 - s)) - (s / (1 - s));
			const y0 = (0 / (1 - s)) - (s / (1 - s));
			b = Math.acos(1 / A1(yS));
			a = (Math.acos(1 / A1(y0)) - b) / (frequency * (-s));
			A = A1;
		} else {
			A = A2;
			b = 0;
			a = 1;
		}
		const At = A(frictionT);
		const angle = frequency * (t - s) * a + b;
		return 1 - (At * Math.cos(angle));
	};
}, {
	defaults,
	type: 'spring',
});