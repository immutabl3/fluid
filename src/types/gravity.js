const defaults = {
	bounciness: 400,
	elasticity: 200,
};

export default Object.assign(function gravity(config = {}) {
	const options = { ...defaults, ...config };
	const bounciness = Math.min(options.bounciness / 1250, 0.8);
	const elasticity = options.elasticity / 1000;
	const gravity = 100;
	const curves = [];


	let L = (function() {
		const b = Math.sqrt(2 / gravity);
		let curve = {
			a: -b,
			b: b,
			H: 1
		};
		if (options.returnsToSelf) {
			curve.a = 0;
			curve.b = curve.b * 2;
		}
		while (curve.H > 0.001) {
			const L = curve.b - curve.a;
			curve.a = curve.b;
			curve.b = curve.b + L * bounciness;
			curve.H = curve.H * bounciness * bounciness;
		}
		return curve.b;
	}());
	

	const getPointInCurve = function(a, b, H, t) {
		L = b - a;
		const t2 = (2 / L) * t - 1 - (a * 2 / L);
		let c = t2 * t2 * H - H + 1;
		if (options.returnsToSelf) {
			c = 1 - c;
		}
		return c;
	};


	const b = Math.sqrt(2 / (gravity * L * L));
	let curve = {
		a: -b,
		b: b,
		H: 1
	};
	if (options.returnsToSelf) {
		curve.a = 0;
		curve.b = curve.b * 2;
	}
	curves.push(curve);
	
	let L2 = L;
	while (curve.b < 1 && curve.H > 0.001) {
		L2 = curve.b - curve.a;
		curve = {
			a: curve.b,
			b: curve.b + L2 * bounciness,
			H: curve.H * elasticity
		};
		curves.push(curve);
	}
	

	return Object.assign(function gravity(tick) {
		let idx = 0;
		let curve = curves[idx];
		while (!(tick >= curve.a && tick <= curve.b)) {
			idx += 1;
			curve = curves[idx];
			if (!curve) break;
		}
		return !curve ?
			(options.returnsToSelf ? 0 : 1) :
			getPointInCurve(curve.a, curve.b, curve.H, tick);
	}, {
		returnsToSelf: options.returnsToSelf,
	});
}, {
	defaults,
	type: 'gravity',
});