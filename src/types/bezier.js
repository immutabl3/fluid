const bez = function(t, p0, p1, p2, p3) {
	return (Math.pow(1 - t, 3) * p0) + (3 * Math.pow(1 - t, 2) * t * p1) + (3 * (1 - t) * Math.pow(t, 2) * p2) + Math.pow(t, 3) * p3;
};

const Bezier = function(t, p0, p1, p2, p3) {
	return {
		x: bez(t, p0.x, p1.x, p2.x, p3.x),
		y: bez(t, p0.y, p1.y, p2.y, p3.y),
	};
};

const yForX = function(xTarget, Bs, returnsToSelf) {
	const B = Bs.find(aB => xTarget >= aB(0).x && xTarget <= aB(1).x);
	if (!B) return returnsToSelf ? 0 : 1;
	
	const xTolerance = 0.0001;
	let lower = 0;
	let upper = 1;
	let percent = (upper + lower) / 2;
	let x = B(percent).x;
	let maxInterations = 100;
	while (Math.abs(xTarget - x) > xTolerance && maxInterations > 0) {
		if (xTarget > x) {
			lower = percent;
		} else {
			upper = percent;
		}
		percent = (upper + lower) / 2;
		x = B(percent).x;
		maxInterations -= 1;
	}
	return B(percent).y;
};

export default Object.assign(function bezier(options = {}) {
	const { points } = options;

	const Bs = (function() {
		const Bs = [];
		const fn1 = function(pointA, pointB) {
			const B2 = t => Bezier(t, pointA, pointA.cp[pointA.cp.length - 1], pointB.cp[0], pointB);
			return Bs.push(B2);
		};
		for (const key in points) {
			const num = parseInt(key, 10);
			if (num >= points.length - 1) break;
			fn1(points[num], points[num + 1]);
		}
		return Bs;
	}());

	return Object.assign(function(t) {
		if (t === 0) return 0;
		if (t === 1) return 1;
		return yForX(t, Bs, this.returnsToSelf);
	}, {
		returnsToSelf: points[points.length - 1].y === 0,
	});
}, {
	type: 'bezier',
});